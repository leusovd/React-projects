import React from "react";

import ItemDetails, { DetailListItem } from "../item-details";
import { withSwapiService } from "../hoc-helpers";

const StarshipDetails = (props) => {    
    return (
        <ItemDetails {...props}>
            <DetailListItem field="model" label="Model" />
            <DetailListItem field="length" label="Length" />
            <DetailListItem field="costInCredits" label="Cost" />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageSrc: swapiService.getStarshipImgSrc
    }
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);