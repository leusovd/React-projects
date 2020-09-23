import React, { Component } from "react";

import ErrorBoundary from "../error-boundary";
import Row from "../row";
import { StarshipList, StarshipDetails } from '../sw-components';

const PeoplePage = ({ match, history }) => {
    return (
        <ErrorBoundary>
            <Row 
                left={<StarshipList onItemSelected={(id) => history.push(id)} />} 
                right={<StarshipDetails itemId={match.params.id} />} 
            />
        </ErrorBoundary>
    )
}

export default PeoplePage;