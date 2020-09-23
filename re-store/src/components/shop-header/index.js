import React from "react";
import "./shop-header.css";
import { Link } from "react-router-dom";

import CartIcon from "./cart-icon";

const ShopHeader = ({ numItems, total }) => {
    return (
        <header className="shop-header row">
            <Link className="logo text-dark" to="/">
                ReStore
            </Link>
            <Link to="/shopping-cart" className="shopping-cart">
                <CartIcon />
                {numItems} items (${total})
            </Link>
        </header>
    );
};

export default ShopHeader;
