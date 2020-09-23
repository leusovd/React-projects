import React from "react";

import ItemDetails, { DetailListItem } from "../item-details";
import { withSwapiService } from '../hoc-helpers';

const PlanetDetails = (props) => {    
    return (
        <ItemDetails {...props}>
            <DetailListItem field="population" label="Population" />
            <DetailListItem field="rotationPeriod" label="Rotation Period" />
            <DetailListItem field="diameter" label="Diameter" />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageSrc: swapiService.getPlanetImgSrc
    }
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);