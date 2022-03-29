import React from 'react';
import classes from './Search.module.css'

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

    return (
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
    );
};

export default Search;
