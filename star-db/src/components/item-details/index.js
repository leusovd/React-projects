import React, { Component } from "react";
import "./item-details.css";

import Spinner from "../spinner";

const DetailListItem = ({ field, label, item }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export { DetailListItem };

export default class ItemDetails extends Component {
    state = {
        item: null,
        imageSrc: null,
        loading: true
    };

    componentDidMount() {
        this.updatePerson();
    }
    

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.setState({ loading: true });
            this.updatePerson();
        }
    }

    updatePerson() {
        const { itemId, getData, getImageSrc } = this.props;

        if (!itemId) {
            return this.turnOffLoading();
        };

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    imageSrc: getImageSrc(item),
                });

                this.turnOffLoading();
            })
            .catch((err) => {
                console.error(err);
            });
    }

    renderDetailListItems() {
        return React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, { item: this.state.item });
        });
    }

    turnOffLoading() {
        setTimeout(() => {
            this.setState({ loading: false });
        }, 500);
    }

    render() {
        const { item, loading, imageSrc } = this.state;

        if (loading) {
            return <Spinner />;
        }

        if (!item) {
            return <p>Select an item from a list</p>;
        }

        const detailListItems = this.renderDetailListItems();

        return (
            <div className="item-details card">
                <img className="item-image" src={imageSrc} alt={`${item.name}`} />

                <div className="card-body">
                    <h4>{item.name}</h4>
                    <ul className="list-group list-group-flush">
                        {detailListItems}
                    </ul>
                </div>
            </div>
        );
    }
}
