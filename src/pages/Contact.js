import React from 'react';
import { Col, Container } from 'reactstrap'
import SocialBar from '../components/socialBar'
import './css/Contact.css'

function Contact() {
    return (
        <Container id="contact-grid">
            <Col id="email">
                Email me at:
                <a
                    href="mailto:rohan@ohlan.me"
                    target="_blank"
                    rel="noreferrer">

                    rohan@ohlan.me
                </a>
                <br />
                <a
                    href="mailto:ohlanrohan@gmail.com"
                    target="_blank"
                    rel="noreferrer">

                    ohlanrohan@gmail.com
                </a>
            </Col>

            <Col>
                Or connect on social media:<br />
                {SocialBar("white")}
            </Col>
        </Container>
    );
}

export default Contact;
