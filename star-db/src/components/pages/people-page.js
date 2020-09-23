import React from "react";
import { PersonList } from "../sw-components";

const PeoplePage = ({ history }) => {
    return <PersonList onItemSelected={(itemId) => history.push(itemId)} />;
};

export default PeoplePage;
