import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import './ViewMouPage.css';

export default function ViewMouPage() {
  return (
    <div className="mou-page">
      <div className="container">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <div className="mou-card glass-card">
          <span className="section-tag">Government &amp; Ministry Recognition</span>
          <h1 className="section-title">Agreement with Ministry of Education (MoE)</h1>

          <div className="mou-text-box">
            <p>
              Pursuant to the Memorandum of Understanding (MoU) executed on 11 July 2024 between the Ministry of Education, Government of India, and ELITE TOOLISTIC (OPC) Pvt Ltd, the Ministry formally accorded recognition to ELITE TOOLISTIC after due assessment of its organizational capabilities, technical competence, and alignment with national education objectives.
            </p>
            <p>
              The agreement establishes a framework of recognition and strategic collaboration in areas such as digital learning, skill development, assessment systems, academic content development, and capacity-building initiatives, in alignment with national priorities including NEP 2020. This recognition under the MoU reflects the Ministry's acknowledgment of ELITE TOOLISTIC as a credible and capable organization for participation in education-related initiatives.
            </p>
          </div>

          <div className="mou-actions">
            <a href="/moe elite.pdf" download="MoE_Elite_MoU.pdf" className="btn-primary">
              <Download size={18} />
              <span>Download MoU PDF Document</span>
            </a>
          </div>

          <div className="mou-pdf-frame-wrapper">
            <iframe
              src="/moe elite.pdf#toolbar=0&navpanes=0"
              title="Ministry of Education MoU Document"
              className="mou-iframe"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
