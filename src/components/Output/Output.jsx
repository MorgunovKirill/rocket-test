import React from 'react';
import Masonry from 'react-masonry-css'
import classes from './Output.module.css'
import PhotoCard from "../PhotoCard/PhotoCard";

const Output = () => {
    const photos = [
        '../../img/1.png',
        '../../img/2.png',
        '../../img/3.png',
        '../../img/4.png',
        '../../img/5.png',
        '../../img/6.png',
        '../../img/7.png',
        '../../img/8.png',
        '../../img/9.png',
        '../../img/10.png',
    ]

    const breakpointColumnsObj = {
        default: 3,
        1500: 2,
        1020: 1,
    };

    return (
        <div className={classes.output}>
            <div className="container">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    <PhotoCard img={require('../../img/1.png')} />
                    <PhotoCard img={require('../../img/2.png')} />
                    <PhotoCard img={require('../../img/3.png')} />
                    <PhotoCard img={require('../../img/4.png')} />
                    <PhotoCard img={require('../../img/5.png')} />
                    <PhotoCard img={require('../../img/6.png')} />
                    <PhotoCard img={require('../../img/7.png')} />
                    <PhotoCard img={require('../../img/8.png')} />
                    <PhotoCard img={require('../../img/9.png')} />
                    <PhotoCard img={require('../../img/10.png')} />
                </Masonry>
            </div>
        </div>
    );
};

export default Output;
