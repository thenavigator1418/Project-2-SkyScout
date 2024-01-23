import React, { Component } from 'react';
import { render } from 'react-dom';
import './ImgGallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialised!');
    };
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href="img/img1.jpg">
                    <img alt="img1" src="img\2023-04-09 16.51.10.jpg" />
                </a>
                <a href="img/img2.jpg">
                    <img alt="img2" src="img/thumb2.jpg" />
                </a>
                
            </LightGallery>
        </div>
    )
}



export default Gallery;
