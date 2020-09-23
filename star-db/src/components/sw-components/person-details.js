import React from "react";

import ItemDetails, { DetailListItem } from "../item-details";
import { withSwapiService } from "../hoc-helpers";

const PersonDetails = (props) => {    
    return (
        <ItemDetails {...props}>
            <DetailListItem field="gender" label="Gender" />
            <DetailListItem field="eyeColor" label="Eye Color" />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageSrc: swapiService.getPersonImgSrc
    }
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);
