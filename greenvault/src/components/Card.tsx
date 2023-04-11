import React from "react";
import { useState } from "react";
import '../css/Card.css';

const ProductCard = (props: any) => {
    const { username, title, item_cat, item_price, item_desc, item_date } = props;
    const [comment, setComment] = useState("");
    
    const handleCommentChange = (event) => {
        setComment(event.target.value);
      }
        
    const handleCommentSubmit = (event) => {
        event.preventDefault();
        console.log(comment);
        setComment("");
    }

    return (
        <div className="card-grid">
            <div className="card">
                <div className="card-header">
                    <p>{username}</p>
                    <p>{title}</p>
                    <p>{item_cat}</p>
                </div>
                <div className="card-details">
                    <p>{item_desc}</p>
                    <p>{item_price}€</p>
                    <p>le: {item_date}</p>
                </div>
                <form className="card-form">
                    <input type="input" onChange={handleCommentChange}></input>
                    <button type="submit" onSubmit={handleCommentSubmit}>Envoyer</button>
            </form>
            </div>            
        </div>

    )
}

export default ProductCard