import React from "react";
import PropTypes from "prop-types";

import { FakeThumbnail } from "./photos";
import { CollectionContainer } from "./containers";

const propTypes = {
    count: PropTypes.number
};

const FakeThumbnails = (count = 10) => (
    <CollectionContainer>
        {[
            ...new Array(count).map((item, index) => (
                <FakeThumbnail key={index} />
            ))
        ]}
    </CollectionContainer>
);

FakeThumbnail.propTypes = propTypes;

export default FakeThumbnails;
