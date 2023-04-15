import React from 'react';
import CardHome from '../CardHome/CardHome';
import '../Categories/categories.scss'

const Categories = () => {
    return (
        <div className='categories '>
            <h2> Gaming Spotlight</h2>
            <div className='cardContainer display--flex'>
                <CardHome/>
                <CardHome/>
                <CardHome/>
                <CardHome/>
            </div>
        </div>
    );
};

export default Categories;