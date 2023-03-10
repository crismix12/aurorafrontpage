import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Description = () => {
    return (
        <CardGroup>
            <Card>
                <Card.Body>
                    <Card.Title>Tanque TK- Aurora</Card.Title>
                    <Card.Text>
                        El Tanque TK- Aurora está fabricado con un copolímero de Polietileno Lineal de Media Densidad, con estabilizador U.V.8., que presenta excelentes propiedades mecánicas, resistencia térmica, cero burbuja interna y una estructura molecular perfectamente homogénea.
                    </Card.Text>
                </Card.Body>
                <Card.Img variant="top" src="..\src\assets\img\tankfront.jpg" />
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Bebedero</Card.Title>
                    <Card.Text>
                        <span style={{ fontWeight: "bold" }}>Características:</span> Polietileno industrial 100 % virgen. Cumple las normas F.D.A. de U.S.A. para alimentos. Flotador de ½”, salidad de 1” con tapón. Peso de 14 Kg. Estructura metalica de refuerzo a los vordes. Es resitente a altas y bajas temperaturas a la intemperie.
                        <br />
                        <span style={{ fontWeight: "bold" }}>GARANTIA:</span> 10 años.
                    </Card.Text>
                </Card.Body>
                <Card.Img variant="top" src="..\src\assets\img\bebedero.png" />
                <Card.Img variant="top" className='mt-5' src="..\src\assets\img\bebederoback.png" />
            </Card>
        </CardGroup>
    );
};

export default Description;