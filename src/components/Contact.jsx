import React, { useState, useEffect } from 'react'; 
import { Element } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './style.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, subject, message });
    }


    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true,
        });


        const handleScroll = () => {
            AOS.refresh();
        };


        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Element name="contact" className="contact-section">
      <div className="grid-container">
      <Container className="my-5">
        <Row>
            <Col>
                <h2 className="text-center mb-5 title">Contact</h2>
            </Col>
        </Row>
                <Row>
                    <Col md={6} data-aos="fade-right">
                        <Card>
                        <Card.Body>
                            <Card.Title>Send a Message</Card.Title>
                            <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSubject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Send Message
                        </Button>
                        </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
        </Element>
    );
}

export default Contact;
