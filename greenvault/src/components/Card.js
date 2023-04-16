import React from "react";
import { useState } from "react";
import '../css/Card.css';
import { useNavigation } from "react-router-dom";

const ProductCard = (props) => {
    const { username, title, item_cat, item_price, item_desc, item_date, item_image } = props;
    const navigate = useNavigation()
    
    const formattedDate = new Date(item_date).toLocaleDateString("fr-FR");

    return (
        <div className="card-grid">
            <div className="card">
                <div className="card-header">
                    <p>{username}</p>
                    <p>{item_cat}</p>
                </div>
                <div className="card-header">
                    <p>{title}</p>
                </div>
                <div className="card-product-img">
                {item_image && <img src={item_image} alt="product-image" />}
                </div>
                <div className="card-details">
                    <p>{item_desc}</p>
                    <p>{item_price}€</p>
                    <p>le: {formattedDate}</p>
                </div>
                <button onClick={() => navigate("/article_detail")}>Acheter pour {item_price}€</button>
            </div>            
        </div>

    )
}

export default ProductCard