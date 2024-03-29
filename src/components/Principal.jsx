import React from 'react';
import { CardGroup, Carousel, Figure } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BANNER from '../assets/img/BanerAurora.jpg';
import TANKPROP from '../assets/img/tanksprop.jpg';
import TANKPROP2 from '../assets/img/tanksprop2.jpg';
const Principal = () => {
    return (
        // <CardGroup className='principal'>
        //     <Card id='home'>
        //         <Card.Body>
        //             <Card.Title><strong>Itech Termoplastica</strong></Card.Title>
        //             {/* <Card.Text>
        //                 This is a wider card with supporting text below as a natural lead-in
        //                 to additional content. This content is a little bit longer.
        //             </Card.Text> */}
        //             <Card.Img variant="bottom" height="100%" src="..\src\assets\img\BanerAurora.jpg" />
        //             {/* <Button variant="primary" href='#about'>Acerca De</Button> */}
        //         </Card.Body>
        //         {/* <Figure>
        //                 <Figure.Image
        //                     width={600}
        //                     height={300}
        //                     alt="171x180"
        //                     src="..\src\assets\img\maxresdefault.jpg"
        //                 />
        //             </Figure> */}

        //     </Card>
        // </CardGroup>

        <Card id='home'>
            <Card.Body >
                <Card.Text className='h1'>
                    Termoplastica Itech Aurora
                </Card.Text>
                <Carousel slide={false}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 imgFix"
                            src={BANNER}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 imgFix"
                            src={TANKPROP}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 imgFix"
                            src={TANKPROP2}
                            alt="third slide"
                        />
                    </Carousel.Item>
                    {/* <Carousel.Item>
                        <img
                            className="d-block w-100 imgFix"
                            src="..\src\assets\img\bebederoProp.jpg"
                            alt="fourth slide"
                        />
                    </Carousel.Item> */}
                </Carousel>
            </Card.Body>
        </Card>
    );
};

export default Principal;