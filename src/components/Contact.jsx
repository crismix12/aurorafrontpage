import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Contact = () => {
    return (
        <CardGroup id='contact'>
            <Card>
                <Card.Body>
                    <Card.Text>
                        <span style={{ fontWeight: "bold" }}>DIRECCION:</span> ITECH - Termoplástica <br />
                        Av. El Minero Nº B-1 y Panamericana <br />
                        <span style={{ fontWeight: "bold" }}>Teléfono:</span> (+591)2-5243951 <br />
                        <span style={{ fontWeight: "bold" }}>Celular:</span> (+591) 73836908 <br />
                        <span style={{ fontWeight: "bold" }}>E-mail:</span> Itech_termoplastica@outlook.com <br />
                        Oruro-Bolivia.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Text>
                        AGENCIA DE DISTRIBUCIÓN ORURO.
                        Comercial Aurora <br />
                        <span style={{ fontWeight: "bold" }}>DIRECCION:</span> Montecinos Nº 265 entre Brasil y Bacovick <br />
                        <span style={{ fontWeight: "bold" }}>Celular:</span> 72482694  60716974 <br />
                        <span style={{ fontWeight: "bold" }}>E-mail:</span> vic_vel242@hotmail.com <br />
                        Oruro - Bolivia
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    );
};

export default Contact;