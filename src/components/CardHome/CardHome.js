import React from 'react';
import weabove from '../../assets/weabovebanner.avif'
import verified from '../../assets/verified.png'
import '../CardHome/cardHome.scss'
const CardHome = () => {
    return (
        <div className='cardHome'>
            <img src={weabove} className='cardHome__img'></img>
            <div className='cardHome__title__verified display--flex'>
                <h3 className='cardHome__title'>WeAbove Prime</h3>
                <img className='verifiedCard' src={verified}/>
            </div>
            <div className='cardHome__volume__floor display--flex'>
                <div className='cardHome__floor'>
                    <h4>FLOOR</h4>
                    <span>1 ETH</span>
                </div>
                <div className='cardHome__volume'>
                    <h4>VOLUME</h4>
                    <span>150 ETH</span>
                </div>
            </div>


        </div>
    );
};

export default CardHome;