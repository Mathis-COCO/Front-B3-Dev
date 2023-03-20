import React from "react";
import { useState } from "react";

const ProductCard = (props: any) => {
    const { username, title, item_cat, item_price, item_desc, item_brand } = props;
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
        <div className="card">
            <div className="card-header">
                <p>{username}</p>
                <p>{title}</p>
                <p>{item_cat}</p>
            </div>
            <div className="card-details">
                <p>{item_desc}</p>
                <p>{item_price}€</p>
                <p>{item_brand}</p>
            </div>
            <form>
                <input type="input" onChange={handleCommentChange}></input>
                <button type="submit" onSubmit={handleCommentSubmit}></button>
          </form>
        </div>
    )
}

export default ProductCard