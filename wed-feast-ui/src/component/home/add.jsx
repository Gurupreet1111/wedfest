
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";

import img3 from "../../assets/images/3.png";
import Button from 'react-bootstrap/Button';

import SearchBox from "../home/searchBox";

const Add = () => {
    return (
        <div className="container">



            <SearchBox />

            <Carousel className="center">
                <Carousel.Item interval={10000}>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={10000} >
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                    {/* 
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
                </Carousel.Item>

            </Carousel>

            <div className="image-position">
            {/* <div className="community"> */}

            <div className="flex-div">
            <Button className="ad-btn">
                <b>Activity</b>
            </Button>
            </div>

            {/* <div className="triangle-right"></div> */}
            {/* </div> */}

            {/* <div className="header1"> */}
            <div className="flex-div">
            <Button className="ad-btn">
                <b>Community</b>
            </Button>
            </div>
            {/* <div className="triangle-right"></div> */}
            {/* </div> */}

            {/* <div className="get-quote"> */}
            {/* <div className="triangle-left"></div> */}
            <div className="flex-div">
            <Button className="ad-btn" style={{ minWidth: "120px" }}>
                <b>Get Quote</b>
            </Button>
            </div>
            {/* </div> */}


            {/* <div className="create-invite"> */}
            {/* <div className="triangle-left"></div> */}
            <div className="flex-div">
            <Button className="ad-btn" style={{ minWidth: "120px" }}>
                <b>Free e-invite</b>
            </Button>

            {/* <Button className="ad-btn1" style={{ minWidth: "120px" }}>
                <b>Customer Care</b>
            </Button> */}


            </div>
            </div>
            {/* </div> */}

        </div>
    )
}

export default Add;