import React from 'react';
import '../Header/header.scss'

const Header = () => {
    return (
        <div className='header display--flex'>
                <div className='header__menu__title display--flex'>
                    <i className="fa-solid fa-bars"></i>
                    <figure className='header__logo'></figure>
                    <h1 className='header__title'>ZoukuPlace</h1>
                </div>
                <ul>
                    <li><i className="fa-solid fa-magnifying-glass"></i></li>
                    <li> <i className="fa-solid fa-cart-shopping"></i></li>
                </ul>
                
               
        </div>
    );
};

export default Header;