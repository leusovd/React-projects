import React from "react";
import "./item-list.css";

const ItemList = (props) => {
    const { data, onItemSelected, renderItem } = props;

    const items = data.map((item) => {
        const { id } = item;
        const label = renderItem(item);

        return (
            <li 
                className="list-group-item" 
                key={id}
                onClick={() => onItemSelected(item.id)}
            >{label}</li>
        );
    });

    items.length = 5;

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
}

export default ItemList;