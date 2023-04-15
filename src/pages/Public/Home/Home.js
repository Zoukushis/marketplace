import React from 'react';
import {NavLink} from 'react-router-dom'
import '../Home/home.scss'
import SliderShow from '../../../components/SliderShow/SliderShow';
import Categories from '../../../components/Categories/Categories';

const Home = () => {
    return (
        <div className='home'>
            <div className='home__top'>
                <ul className='home__link display--flex'>
                    <li><NavLink activeclassname='active--link'>All</NavLink></li>
                    <li><NavLink>Art</NavLink></li>
                    <li><NavLink>Gaming</NavLink></li>
                    <li><NavLink>Memberships</NavLink></li>
                    <li><NavLink>PFPs</NavLink></li>
                    <li><NavLink>Photography</NavLink></li>
                </ul>
                <SliderShow/>
            </div>
            <div>
                <Categories/>
                <Categories/>
                <Categories/>
                <Categories/>
                <Categories/> 
            </div>
        </div>
    );
};

export default Home;