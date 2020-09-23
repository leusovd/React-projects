import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";

import "./random-planet.css";

import PlanetView from "./planet-view";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

export default class extends Component {
    swapiService = new SwapiService();

    state = {
        planet: {
            id: null,
            name: null,
            population: null,
            rotationPeriod: null,
            diameter: null,
        },
        loading: true,
        error: false,
    };

    onPlanetLoaded = (planet) => {
        this.setState({ planet });

        setTimeout(() => {
            this.setState({ loading: false });
        }, 500);
    };

    onError = (e) => {
        this.setState({ error: true });

        setTimeout(() => {
            this.setState({ loading: false });
        }, 500);
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 22) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };

    componentDidMount() {
        this.updatePlanet();

        this.interval = setInterval(() => {
            this.updatePlanet();
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { planet, loading, error } = this.state;

        const errorMessage = error && !loading ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? (
            <PlanetView planet={planet} />
        ) : null;

        return (
            <div className="random-planet jumbotron rounded">
                {spinner}
                {content}
                {errorMessage}
            </div>
        );
    }
}
