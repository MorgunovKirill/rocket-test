import React from 'react';
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <div className="container">
                <nav className={classes.mainNav}>
                    <div className={classes.mainNav__logo}>
                        <a href="#">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.75 7.875V0H19.25V7.875H8.75ZM19.25 12.25H28V28H0V12.25H8.75V20.125H19.25V12.25Z" fill="white"/>
                            </svg>
                            <span>ImageStock</span>
                        </a>
                    </div>
                    <ul className={classes.mainNav__list}>
                        <li className={classes.mainNav__item}>
                            <a href="#" className={classes.mainNav__link}>
                                <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.0516 20.2443C12.1779 21.0597 10.8329 21.0597 9.95928 20.2325L9.83283 20.1143C3.79765 14.501 -0.145337 10.8257 0.00410514 6.24047C0.0730786 4.23147 1.07319 2.30521 2.69407 1.17072C5.7289 -0.956453 9.47646 0.0362259 11.4997 2.47065C13.5229 0.0362259 17.2705 -0.96827 20.3053 1.17072C21.9262 2.30521 22.9263 4.23147 22.9953 6.24047C23.1562 10.8257 19.2017 14.501 13.1665 20.138L13.0516 20.2443Z" fill="white"/>
                                </svg>
                                <span>Избранное</span>
                            </a>
                        </li>
                        <li className={classes.mainNav__item}>
                            <a href="#" className={classes.mainNav__link}>
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.48945 13.0019C4.48945 7.53106 9.00695 3.10022 14.5211 3.25189C19.602 3.39272 23.8486 7.63939 23.9895 12.7202C24.1411 18.2344 19.7103 22.7519 14.2395 22.7519C11.9753 22.7519 9.90612 21.9827 8.25945 20.6827C7.75029 20.2927 7.71779 19.5236 8.17279 19.0686C8.56279 18.6786 9.16945 18.6461 9.60279 18.9819C10.8811 19.9894 12.4953 20.5852 14.2395 20.5852C18.4645 20.5852 21.877 17.1294 21.8228 12.8936C21.7686 8.86355 18.3778 5.47272 14.3478 5.41856C10.1011 5.36439 6.65612 8.77689 6.65612 13.0019H8.59529C9.08279 13.0019 9.32112 13.5869 8.98529 13.9227L5.96279 16.9561C5.74612 17.1727 5.41029 17.1727 5.19362 16.9561L2.17112 13.9227C1.82445 13.5869 2.06279 13.0019 2.55029 13.0019H4.48945ZM13.1561 9.48105C13.1561 9.03689 13.5245 8.66855 13.9686 8.66855C14.4128 8.66855 14.7811 9.03689 14.7811 9.47022V13.1536L17.9011 15.0061C18.2803 15.2336 18.4103 15.7319 18.1828 16.1219C17.9553 16.5011 17.457 16.6311 17.067 16.4036L13.687 14.3994C13.362 14.2044 13.1561 13.8469 13.1561 13.4677V9.48105Z" fill="white"/>
                                </svg>
                                <span>История поиска</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

