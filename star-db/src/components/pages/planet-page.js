import React from "react";

import ErrorBoundary from "../error-boundary";
import Row from "../row";
import { PlanetList, PlanetDetails } from '../sw-components';

const PlanetPage = ({ match, history }) => {    
    return (
        <ErrorBoundary>
            <Row 
                left={<PlanetList onItemSelected={(id) => history.push(id)} />}
                right={<PlanetDetails itemId={match.params.id} />} 
            />
        </ErrorBoundary>
    );
}

export default PlanetPage;