import React from "react";
import ItemList from "../item-list";
import {
    withSwapiService,
    withData,
    withRenderFunction,
    compose,
} from "../hoc-helpers";

/* Render Functions */
const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name }) => (
    <span>
        {name} ({model})
    </span>
);

/* Map Functions */
const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople,
    };
};
const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets,
    };
};
const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships,
    };
};

/* List Components */
const PersonList = compose(
    withSwapiService(mapPersonMethodsToProps),
    withData,
    withRenderFunction(renderName)
)(ItemList);

const PlanetList = compose(
    withSwapiService(mapPlanetMethodsToProps),
    withData,
    withRenderFunction(renderName)
)(ItemList);

const StarshipList = compose(
    withSwapiService(mapStarshipMethodsToProps),
    withData,
    withRenderFunction(renderModelAndName)
)(ItemList);

export { PersonList, PlanetList, StarshipList };
