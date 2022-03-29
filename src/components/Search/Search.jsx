import React, {useContext, useState} from 'react';
import classes from './Search.module.css'
import Output from "../Output/Output";
import {Context} from "../../server/state";

const Search = () => {
    const tags = [
        {text: 'Wallpapers', link: '#'},
        {text: 'Textures & Patterns', link: '#'},
        {text: 'Nature', link: '#'},
        {text: 'Current Events', link: '#'},
        {text: 'Architecture', link: '#'},
        {text: 'Business & Work', link: '#'},
        {text: 'Film', link: '#'},
        {text: 'Animals', link: '#'},
        {text: 'Travel', link: '#'},
        {text: 'Fashion', link: '#'},
    ]

    const context = useContext(Context);
    const [loadingMore, setLoadingMore] = useState(false);

    return (
        <div>
            <section className={classes.search}>
                <h2 className={classes.search__title}>Поиск</h2>
                <ul className={classes.search__tags}>
                    {
                        tags.map((el, index) => {
                            return  <li className={classes.search__item} key={index}>
                                <a href={el.link} className={classes.search__link}>{el.text}</a>
                            </li>
                        })
                    }
                </ul>
            </section>
            <Output />
        </div>
    );
};

export default Search;
