/**
 * Checkout Service for PayAlma Gateway Integration
 * Invokes /api/checkout backend proxy to initiate PayAlma purchase session and return checkout redirect URL.
 */

/**
 * Parses numeric price from string or number
 */
function parsePrice(priceStr) {
  if (typeof priceStr === 'number') return priceStr;
  if (!priceStr) return 0;
  const num = String(priceStr).replace(/[^0-9]/g, '');
  return parseInt(num, 10) || 0;
}

/**
 * Initiates checkout session with PayAlma via /api/checkout
 * @param {Object} params
 * @param {Array} params.cartItems List of items in cart
 * @param {Number} params.totalAmount Grand total payable
 * @param {Object} params.clientDetails Customer details { name, email }
 * @returns {Promise<string>} Checkout redirect URL
 */
export async function initiateCheckout({ cartItems = [], totalAmount = 0, clientDetails = {} }) {
  const products = (cartItems && cartItems.length > 0)
    ? cartItems.map(item => {
        const basePrice = parsePrice(item.price) || (totalAmount > 0 ? Math.round(totalAmount / cartItems.length) : 100);
        return {
          name: item.title || item.name || 'Course Enrollment',
          // Multiply by 100 because PayAlma P2P Agents gateway processes amounts in paisa/sub-units (e.g. ₹25,000 = 2,500,000 paisa)
          price: basePrice * 100,
          quantity: item.quantity || 1
        };
      })
    : [
        {
          name: 'Course Enrollment',
          price: (totalAmount || 100) * 100,
          quantity: 1
        }
      ];

  const payload = {
    client: {
      email: clientDetails?.email?.trim() || 'customer@elitetoolistic.com',
      full_name: clientDetails?.name?.trim() || 'Valued Learner',
      phone: '',
      country: 'IN'
    },
    purchase: {
      currency: 'INR',
      products: products
    },
    success_redirect: `${window.location.origin}/contact?payment=success`,
    failure_redirect: `${window.location.origin}/contact?payment=failed`
  };

  const response = await fetch('/api/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    const text = await response.text();
    console.error('Server returned non-JSON response:', text);
    throw new Error('API server returned invalid response format.');
  }

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || data.message || `Payment gateway error (${response.status})`);
  }

  const redirectUrl = data.checkout_url || data.direct_post_url || data.url;
  if (!redirectUrl) {
    throw new Error('Payment gateway response missing checkout redirect link.');
  }

  return redirectUrl;
}
