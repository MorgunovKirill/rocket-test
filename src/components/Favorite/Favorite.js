import React from 'react';
import classes from './Favorite.module.css'
import Output from "../Output/Output";

const Favorite = () => {
    return (
        <div className={classes.favorite}>
            <div className="container">
                <h2 className={classes.favorite__title}>Избранное</h2>
                <Output />
            </div>
        </div>
    );
};

export default Favorite;
