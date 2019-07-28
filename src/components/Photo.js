import React from "react";
import { PhotoWrapper } from "./styled/photos";
import { PropTypes } from "prop-types";

const propTypes = {
    photoUrl: PropTypes.string.isRequired
};

const Photo = ({ photoUrl }) => (
    <PhotoWrapper photoUrl={photoUrl} data-test="photo-component" />
);

Photo.propTypes = propTypes;

export default Photo;
