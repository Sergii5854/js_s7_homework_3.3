import React, {PropTypes,  Component } from 'react';

import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import './carousel.css';
import cat1 from './img/cat1.jpg';
import cat2 from './img/cat2.jpg';
import cat3 from './img/cat3.jpg';
import cat4 from './img/cat4.jpg';
import cat5 from './img/cat5.jpg';
import cat6 from './img/cat6.jpg';
import cat7 from './img/cat7.jpg';

// https://www.npmjs.com/package/react-responsive-carousel

export default class MyCarousel extends Component {
	  constructor(props) {
        super(props)		

        this.cats = [
        	  {
                url : cat1,
                legend: ' This is my legend',
                alt : 'cat'
            },
              {
                url : cat2,
                legend: 'legend',
                alt : 'cat'
            },
              {
                url : cat3,
                legend: 'try legend',
                alt : 'cat'
            },
              {
                url : cat4,
                legend: 'legend',
                alt : 'cat'
            },
              {
                url : cat5,
                legend: 'legend',
                alt : 'cat'
            },
              {
                url : cat6,
                legend: 'legend',
                alt : 'cat'
            },
              {
                url : cat7,
                legend: 'legend',
                alt : 'cat - real cool cat'
            }
        ]
      

     this.renderHeader = this.renderHeader.bind(this)
    }

    renderHeader() {
        return (
        	<Carousel  infiniteLoop autoPlay  emulateTouch >		            
	           {this.cats.map(function(cat, index) {
	                return (
	                	<div  key={index} class={cat.alt}  >	                
		                   <img src={cat.url}  alt={cat.alt}/>
		                   <p className="legend">{cat.legend}</p>
	                  </div>
	                )
	            }) }
            </Carousel >
        )
    }
    		// 

    render() {
        return (         	
              <div>{this.renderHeader()}</div>        
	 
        );
    }
};


