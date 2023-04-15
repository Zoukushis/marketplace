import React from "react";
import "./collection.scss";
import CollectionCard from "../../components/CollectionCard/CollectionCard";
import { mock_data } from "../../../src/mock-data";

// MOCKS

import collection_banner from "../../assets/mocks/collections/banner.avif";
import collection_logo from "../../assets/mocks/collections/logo.avif";
import verified_icon from "../../assets/mocks/collections/icon-verified.png";

import filter_icon from "../../assets/mocks/collections/sort.png";
import sort_icon from "../../assets/mocks/collections/swap.png";

const Collection = () => {
  return (
    <div className="collection">
  
      <div className="collection__banner">
        <img src={collection_banner}></img>
        <div className="collection__logo">
          <img src={collection_logo}></img>
        </div>
      </div>

      {/* INFO */}
      <div className="collection__info flex--column">
        {/* INFO TOP */}
        <div className="collection__info__top flex--column">
          <ul className="collection__info__top__icons">
            <li>
              <i className="fa-solid fa-link"></i>
            </li>
            <li>
              <i className="fa-solid fa-ellipsis"></i>
            </li>
          </ul>
          <h1 className="collection__name">
            HELIX - PARALLEL CITY LAND <img src={verified_icon}></img>
          </h1>
        </div>
        {/* INFO MID */}
        <div className="collection__info__mid flex--column">
          <p className="collection__creator flex--basic">
            By <a href="#"> HELIXMetaverse </a> <img src={verified_icon}></img>
          </p>
          <ul className="collection__info__stats flex--basic">
            <li>
              Items <span className="text--bold">14,7K</span>
            </li>
            <li>
              Created <span className="text--bold">Dec 2022</span>
            </li>
            <li>
              Creator earnings <span className="text--bold">5%</span>
            </li>
            <li>
              Chain <span className="text--bold">Ethereum</span>
            </li>
            <li>
              Category <span className="text--bold">Virtual Worlds</span>
            </li>
          </ul>
          <p className="collection__info__description">
            66% OF LAND STAKED: ....
          </p>
          <div className="collection__info__see-more flex--basic">
            <span>See more</span>
            <i className="fa-solid fa-angle-down"></i>
          </div>
        </div>
        {/* INFO BOTTOM */}
        <div className="collection__info__bottom flex--basic">
          <a className="collection__volume">
            <span>1542 ETH</span>
            <span>total volume</span>
          </a>
          <a className="collection__floor">
            <span>0.09 ETH</span>
            <span>floor price</span>
          </a>
          <a className="collection__best-offer">
            <span>0.087 WETH</span>
            <span>best offer</span>
          </a>
          <a className="collection__listed">
            <span>2%</span>
            <span>listed</span>
          </a>
          <a className="collection__owner">
            <span>1453</span>
            <span>owners</span>
          </a>
          <a className="collection__unique-owner">
            <span>10%</span>
            <span>unique owners</span>
          </a>
        </div>
      </div>
      {/* COLLECTION NAV */}
      <nav className="collection__nav">
        <ul className="flex--basic">
          <li className="nav--link nav--active">Items</li>
          <li className="nav--link">Offers</li>
          <li className="nav--link">Analytics</li>
          <li className="nav--link">Activity</li>
        </ul>
      </nav>
      {/* COLLECTION SEARCH BAR */}
      <div className="collection__search flex--basic">
        <img src={filter_icon} alt="filter icon"></img>
        <div className="input--bar flex--basic">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input placeholder="Search by name or trait"></input>
        </div>
        <img src={sort_icon} alt="filter icon"></img>
      </div>
      {/* LIVE RESULTS */}
      <div className="collection__total flex--basic">
        <div className="live--icon"></div>
        <div className="live--icon live--icon--glow"></div>
        <span className="text--bold">Live</span>
        <span>14 677 results</span>
      </div>

      <div className="collection__items__container flex--basic">
        {mock_data.map(item => {
            return <CollectionCard itemData={item}/>
        })}
      </div>
    </div>
  );
};

export default Collection;
