import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';


const About = () => {
    return (
        <Container className="py-4">
            <Row className="justify-content-center">
                <Col className="text-center">
                <h1 className="display-4 fw-bolder" style={{ paddingTop: '120px', textShadow: '1px 1px 5px #92C7CF ' }}>About</h1>
                <br /><br /><br />
                <p class="card-text lead fs-4 ">Hi, I'm Lusil! Welcome to my fake store :) </p>
                <p class="card-text lead fs-1 py-3">Enjoy your visit!</p>

                </Col>
            </Row>
        </Container>
    );
}

export default About;