import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { BsFacebook } from 'react-icons/bs'
import { FaWhatsapp } from 'react-icons/fa'
const Footer = () => {
    return (
        <Card className="text-center">
            <Card.Body>
                <Card.Title>Nuestras redes sociales</Card.Title>
                {/* <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text> */}
                <ListGroup horizontal className="justify-content-center flex-grow-1 pe-3">
                    <ListGroup.Item>fb <BsFacebook /></ListGroup.Item>
                    <ListGroup.Item>wsp <FaWhatsapp /></ListGroup.Item>
                </ListGroup>
                <br />
                <Button variant="primary" href='#home'>Volver Inicio</Button>
            </Card.Body>
            <Card.Footer className="text-muted">ITECH Aurora 2023</Card.Footer>
        </Card>
    );
};

export default Footer;