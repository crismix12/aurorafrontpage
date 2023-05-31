import React from 'react';
import { Carousel } from 'react-bootstrap';
import TANKS from '../assets/img/tanks.jpg';
import BEBEDERO from '../assets/img/bebedero.png';
const Products = () => {
    return (
        <Carousel id='products' slide={false}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={TANKS}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 style={{ color: "white", fontWeight: "bold" }}>Tanque TK- Aurora</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={BEBEDERO}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 style={{ color: "white", fontWeight: "bold" }}>BEBEDERO DE 350 L.</h3>
                    {/* <p style={{ color: "black", fontWeight: "bolder" }}>Características: Polietileno industrial 100 % virgen. Cumple las normas F.D.A. de U.S.A. para alimentos. Flotador de ½”, salidad de 1” con tapón. Peso de 14 Kg. Estructura metalica de refuerzo a los vordes. Es resitente a altas y bajas temperaturas a la intemperie. </p> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Products;