import React from "react";
import user_pfp from "../images/user-without-pic.png"
import item_img from "../images/product_img_1.png"

const ProductCard = (props: any) => {
    const { username, item_price, item_size, item_brand } = props;

    return (
        <div className="card">
            <div className="card-header">
                <img src={user_pfp} alt="Profile Picture" className="user-pfp" />
                <p>{username}</p>
            </div>
            <div>
                <img src={item_img} alt="item image" className="card-product-img" />
            </div>
            <div className="card-details">
                <p>{item_price}€</p>
                <p>taille: {item_size}</p>
                <p>{item_brand}</p>
            </div>
        </div>
    )
}

export default ProductCard