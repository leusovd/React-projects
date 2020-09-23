import React from "react";
import "./shopping-cart-table.css";
import { connect } from "react-redux";
// import { compose } from "../../utils";
import { bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart } from '../../actions';

import TrashIcon from "./trash-icon";
import PlusIcon from "./plus-icon";
import MinusIcon from "./minus-icon";

const ShoppingCartTable = ({
    items,
    total,
    onIncrease,
    onDecrease,
    onDelete,
}) => {
    const renderRow = (item, index) => {
        const { id, title, count, total } = item;
    
        return (
            <tr key={id}>
                <td>{index + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick={() => onDelete(id)}
                    >
                        <TrashIcon />
                    </button>
                    <button
                        className="btn btn-outline-success btn-sm float-right"
                        onClick={() => onIncrease(id)}
                    >
                        <PlusIcon />
                    </button>
                    <button
                        className="btn btn-outline-warning btn-sm float-right"
                        onClick={() => onDecrease(id)}
                    >
                        <MinusIcon />
                    </button>
                </td>
            </tr>
        );
    }

    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map(renderRow)}
                </tbody>
            </table>

            <div className="total">Total: ${total}</div>
        </div>
    );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal }}) => {
    return {
        items: cartItems,
        total: orderTotal
    };
};

const mapDispatchToProps = { 
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
