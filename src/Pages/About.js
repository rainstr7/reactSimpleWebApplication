import React, {Component} from 'react';
import {Col, Container, Nav, Navbar, Row, Tab} from "react-bootstrap";

class About extends Component {
    render() {
        return (
            <Container>
                <div className="pt-5">
             <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className="mt-5">
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column mt-2">
                            <Nav.Item>
                                <Nav.Link eventKey="first">
                                    Design
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">
                                    Team
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                    Programming
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">
                                    Frameworks
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fifth">
                                    Libraries
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content className="mt-10">
                            <Tab.Pane eventKey="first">
                                <img src="https://images.unsplash.com/photo-1544794040-a6ab770bec83?ixlib=rb-1.2.1&auto=format&fit=crop&w=912&q=80"/>
                                <p>Talis lumen semper magicaes mortem est.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <img src="https://images.unsplash.com/photo-1544794040-a6ab770bec83?ixlib=rb-1.2.1&auto=format&fit=crop&w=912&q=80"/>
                                <p>Azureus ionicis tormento satis gratias lura est.</p>

                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <img src="https://images.unsplash.com/photo-1544794040-a6ab770bec83?ixlib=rb-1.2.1&auto=format&fit=crop&w=912&q=80"/>
                                <p>Festus urbs sapienter promissios mineralis est.</p>

                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <img src="https://images.unsplash.com/photo-1544794040-a6ab770bec83?ixlib=rb-1.2.1&auto=format&fit=crop&w=912&q=80"/>
                                <p>Brevis omnia superbe apertos xiphias est.</p>

                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                                <img src="https://images.unsplash.com/photo-1544794040-a6ab770bec83?ixlib=rb-1.2.1&auto=format&fit=crop&w=912&q=80"/>
                                <p>Eras sunt frondators de fidelis fiscina.</p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
             </Tab.Container>
                </div>
         </Container>
        );
    }
}

export default About;