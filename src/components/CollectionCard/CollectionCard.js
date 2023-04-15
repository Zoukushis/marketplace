import React from "react";
import "./collectionCard.scss";

const CollectionCard = ({ itemData }) => {
  return (
    <div className="collection-card">
      <div className="collection-card__image-container">
        <img src={itemData.image} alt={itemData.name}></img>
      </div>
      <div className="collection-card__info flex--column">
        <div className="collection-card_info__top flex--basic">
          <span className="collection-card__info__name text--bold">
            {itemData.name}
          </span>
          <span className="collection-card__info__rarity text--bold"># {itemData.rarity} </span>
        </div>
        <span className="text--bold"> {itemData.price} ETH</span>
        <span className="text--small">Last sale:  {itemData.lastSale} WETH </span>
      </div>
    </div>
  );
};

export default CollectionCard;
