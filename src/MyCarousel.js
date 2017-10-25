import React, { Component } from 'react';


var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;

export default class MyCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay>
                <div>
                    <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                                <div>
                    <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
                    <p className="legend">Legend 6</p>
                </div>
                <div>
                    <img src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
                    <p className="legend">Legend 7</p>
                </div>
                <div>
                    <img src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" />
                    <p className="legend">Legend 8</p>
                </div>
                <div>
                    <img src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg" />
                    <p className="legend">Legend 9</p>
                </div>
       
            </Carousel>
        );
    }
}

//ReactDOM.render(<MyCarousel />, document.getElementById('carousel-container'));

// Don't forget to include the css in your page 
// <link rel="stylesheet" href="carousel.css"/>