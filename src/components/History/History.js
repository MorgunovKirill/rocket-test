import React from 'react';
import classes from './History.module.css'
import Output from "../Output/Output";

const History = () => {
    return (
        <div className={classes.history}>
            <div className="container">
                <h2 className={classes.history__title}>История</h2>
                <Output />
            </div>
        </div>
    );
};

export default History;
