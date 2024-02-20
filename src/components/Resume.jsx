import React from 'react';
import { Element } from 'react-scroll';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'aos/dist/aos.css';
import resumeImage from '../assets/photocv.png';
import resumePDF from '../assets/Tomasz_Dudek_CV.pdf';
import './style.css';

const Resume = () => {
  return (
      <Element name="resume" className="resume-section">
          <div className="grid-container mb-5">
          <Container className="my-5">
        <Row>
          <Col md={12}>
            <h2 className="text-center title">Resume</h2>
          </Col>
        </Row>
        <Row className="align-items-center">
        <Col md={6} data-aos="fade-left">
        <h4>Tomasz Dudek</h4>
              <p><em>I am a hardworking, motivated, and ambitious individual with outstanding technical skills. I am passionate to begin a career in IT 
and so undertook a study programme to prepare me for the IT sector, with exposure to Cloud Computing. I recently graduated 
from a Cloud Engineer Programme specialising in troubleshooting hardware and software issues through a series of courses, 
practical work, and official certifications. I have a commitment to high standards when dealing with customers and staff 
members and possess excellent communication skills at all levels. I am confident that I will hit the ground running and be an 
asset to your organisation. </em></p>

              <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Cloud Engineer Programme</h4>
              <h5>2022 – 2024</h5>
              <p><em> IT Certify | London, UK </em></p>
              <p>The Cloud Engineer Programme focused on preparing me for the IT Support sector 
with exposure to Cloud Computing through a series of intense courses and practical 
application. 
Courses studied included:
CompTIA IT Fundamentals, CompTIA A+, CompTIA Network+, CompTIA Cloud+, ITIL 
Foundation, MCSA Microsoft Windows 10, CompTIA Linux+, Cloud Computing 
Security Knowledge, Microsoft Azure and Amazon Web Services. </p>
            </div>
            <div className="resume-item">
              <h4>
 Bachelor’s degree in industrial Commodity Science in Engineering - Level 6
</h4>
              <h5>2008 – 2013</h5>
              <p><em>Technical University in Rzeszow, Poland</em></p>
            </div>
           
            <h3 className="resume-title">Other Certification</h3>
            <div className="resume-item">
              <h4>CompTIA A+ Core 1</h4> <h4>CompTIA A+ Core 2</h4><h4> CompTIA A+ Core 2 Practice Lab</h4><h4> CompTIA Cloud+ Practice Lab</h4>
              <h5>2022 - Present</h5>
            </div>
          </Col>
          <Col md={6} data-aos="fade-right" className="mt-3">
            <img src={resumeImage} alt="My Resume" style={{ maxWidth: '100%', height: 'auto' }} />
            <div className="mt-3 align-items-center">
              <Button href={resumePDF} download="My_Resume.pdf" variant="primary">Download My CV</Button>
            </div>
          </Col>
        </Row>
      </Container>
          </div>
      </Element>
  );
}

export default Resume;
