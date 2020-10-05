import React, {Component} from 'react';
import CarouselBox from "../Components/CarouselBox";
import {Container, CardDeck, Card, Button} from "react-bootstrap";
class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox/>
                <Container>
                    <h2 className="text-center m-4">Out Team</h2>
                    <CardDeck className="m-4">
                        <Card bg="dark" border="" text="white">
                            <Card.Img
                                variant="top"
                                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>The plank tastes with amnesty, hail the lighthouse.</Card.Text>
                                <Button variant="light">About team</Button>
                            </Card.Body>
                        </Card>
                        <Card bg="dark" border="" text="white">
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>The plank tastes with amnesty, hail the lighthouse.</Card.Text>
                                <Button variant="light">About team</Button>
                            </Card.Body>
                            <Card.Img
                                variant="bottom"
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                            />
                        </Card>
                        <Card bg="dark" border="" text="white">
                            <Card.Img
                                variant="top"
                                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>The plank tastes with amnesty, hail the lighthouse.</Card.Text>
                                <Button variant="light">About team</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        );
    }
}

export default Home;