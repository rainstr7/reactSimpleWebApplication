import React, {Component} from 'react';
import {Row, Container, Col, Media, ListGroup, Card} from "react-bootstrap";

class Blog extends Component {
    render() {
        return (
            <Container>
                <div className="mt-5">
                <Row>
                    <Col md="9">
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                                className="mr-3"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>Sunt cannabises prensionem peritus, albus classises.</p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                                className="mr-3"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>Sunt cannabises prensionem peritus, albus classises.</p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                                className="mr-3"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>Sunt cannabises prensionem peritus, albus classises.</p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                                className="mr-3"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>Sunt cannabises prensionem peritus, albus classises.</p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md-3>
                        <h5 className="text-center mt-5">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>HTML/CSS
                                </ListGroup.Item>
                                <ListGroup.Item>JavaScript
                                </ListGroup.Item>
                                <ListGroup.Item>C++
                                </ListGroup.Item>
                                <ListGroup.Item>Python
                                </ListGroup.Item>
                                <ListGroup.Item>Java
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="mt-3" bg="light">
                            <Card.Body>
                                <Card.Title>
                                    Side Widget
                                </Card.Title>
                                <Card.Text>
                                    Nunquam vitare equiso.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </div>
            </Container>
        )
    }
}

export default Blog;