import React, {PropTypes,  Component } from 'react';

import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';


// let cats = [
//  './img/cat1.jpg', 
//  './img/cat2.jpg',
//  './img/cat3.jpg',
//  './img/cat4.jpg',
//  './img/cat5.jpg',
//  './img/cat6.jpg',
//  './img/cat7.jpg',
// ];


// https://www.npmjs.com/package/react-responsive-carousel

export default class MyCarousel extends Component {
	  // constructor(props) {
   //      super(props)

   //      this.cats = [
   //      	  {
   //              url : './img/cat1.jpg',
   //              legend: 12
   //          },
   //          {
   //            url : './img/cat2.jpg',
   //            legend: "Cat 2"
   //        },
   //      ]
      

   //   this.renderHeader = this.renderHeader.bind(this)
   //  }

    // renderHeader() {
    //     return (
    //         <div>{this.cats.map(function(cats, index) {
    //             return (
    //             	// <div>	                
	   //                 <img src={cats.url} />
	   //                 // <p className="legend">{cats.legend}</p>
    //               // </div>
    //             )
    //         })}</div>
    //     )
    // }
    		//<div>{this.renderHeader()}</div> 

    render() {
        return (        
	            <Carousel 
								showArrows
				        infiniteLoop
				        autoPlay
				        emulateTouch
	            >	
											           
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
};


//ReactDOM.render(<MyCarousel />, document.getElementById('carousel-container'));

// Don't forget to include the css in your page 
// <link rel="stylesheet" href="carousel.css"/>