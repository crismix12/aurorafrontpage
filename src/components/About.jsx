import React from 'react';
import { Card, CardGroup, Figure } from 'react-bootstrap';

const About = () => {
    return (

        <CardGroup className='principal' id='about'>
            <Card  className='aboutContainer' >
                <Card.Body>
                    <Card.Title>Acerca de Nosotros</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to
                        additional content.{' '}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quos voluptatibus voluptates, sunt aut reiciendis suscipit repellendus fuga nisi totam vel? Placeat perferendis quae et eaque quos totam illum odio ipsum ducimus ea nihil incidunt, in corporis sunt neque fugit quia enim adipisci sapiente. Fuga minima numquam repudiandae alias velit! Tempora nisi, architecto nobis ullam ipsam animi esse harum exercitationem voluptatibus tenetur quis consectetur. Accusantium laudantium alias consequatur non, a nemo commodi quia autem vero ab, corporis necessitatibus amet 
                    </Card.Text>
                    {/* <iframe
                src='https://www.google.com/maps/search/?api=1&query=-17.372500%2C-66.138968'
                // frameBorder={0}
                style={{ border: '0', width: '100%', height: '100%' }}
            ></iframe> */}
                </Card.Body >
            </Card >
            <Card className='aboutContainer'>
                {/* <Figure>
                    <Figure.Image
                        width={800}
                        height={300}
                        alt="171x180"
                        src="..\src\assets\img\unnamed.jpg"
                    />
                </Figure> */}
                <Card.Img variant="bottom" height="100%" src="..\src\assets\img\unnamed.jpg" />
            </Card>
        </CardGroup>


    );
};

export default About;