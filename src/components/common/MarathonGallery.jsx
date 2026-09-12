import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CardContainer, CardBody, CardItem } from '../ui/ThreeDCard';
import './MarathonGallery.css';

const MARATHON_CARDS = [
  { num: '01', title: 'Generative AI Prompt Engineering', desc: 'Accelerated 20-day masterclass in enterprise prompt architecture, LLM workflow optimization, and automated corporate drafting.', link: '/course/generative-ai-prompt-engineering-for-enterprise-workflows' },
  { num: '02', title: 'AI-Powered Automation for Small Business', desc: 'Streamline client acquisition, invoice processing, and ops using autonomous AI agents and low-code integrations.', link: '/course/ai-powered-automation-for-small-business-operations' },
  { num: '03', title: 'BIM Software Coordination', desc: '3D Building Information Modeling workflow standards for civil engineers, MEP coordinators, and site managers.', link: '/course/bim-building-information-modeling-software-coordination' },
  { num: '04', title: 'Construction Cost Estimation & Billing', desc: 'Master quantity surveying, contractor invoice verification, rate analysis, and BBS scheduled calculations.', link: '/course/construction-cost-estimation-quantity-surveying-basics' },
  { num: '05', title: 'Data Analytics with PowerBI & Tableau', desc: 'Transform raw enterprise operational metrics into real-time executive dashboards and predictive visual tools.', link: '/course/data-analytics-for-operations-using-powerbi-and-tableau' },
  { num: '06', title: 'Lean Six Sigma Foundations', desc: 'Reduce process waste, optimize workflow throughput, and implement DMAIC quality control frameworks.', link: '/course/lean-six-sigma-foundations-for-operational-excellence' },
  { num: '07', title: 'Revit Architecture for Project Managers', desc: 'Design coordination, structural drawing verification, and clash detection for commercial construction.', link: '/course/revit-architecture-foundations-for-project-managers' },
  { num: '08', title: 'Supply Chain & Inventory Management', desc: 'Warehouse logistics optimization, vendor SLA tracking, 3PL performance auditing, and inventory valuation.', link: '/course/supply-chain-logistics-warehouse-inventory-management' }
];

export default function MarathonGallery() {
  const navigate = useNavigate();

  return (
    <div className="marathon-grid-wrapper">
      <div className="container">
        <div className="marathon-grid">
          {MARATHON_CARDS.map((card) => (
            <CardContainer key={card.num} containerClassName="marathon-3d-container">
              <CardBody className="marathon-card glass-card" onClick={() => navigate(card.link)}>
                <CardItem translateZ="50" className="marathon-card-header">
                  <span className="marathon-num">{card.num}</span>
                  <span className="marathon-badge">10 Meetings Marathon</span>
                </CardItem>

                <CardItem translateZ="65" as="h3" className="marathon-title">
                  {card.title}
                </CardItem>

                <CardItem translateZ="45" as="p" className="marathon-desc">
                  {card.desc}
                </CardItem>

                <CardItem translateZ="30" className="marathon-card-footer">
                  <span className="marathon-action">EXPLORE PATHWAY →</span>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
}
