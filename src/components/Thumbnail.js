import React from "react";

import { ThumbnailWrapper } from "./styled/photos";
import { PropTypes } from "prop-types";

const propTypes = {
    photo: PropTypes.shape({
        albumId: PropTypes.number,
        id: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired
    }).isRequired,
    id: PropTypes.string.isRequired
};

const Thumbnail = ({ photo, id }) => (
    <ThumbnailWrapper
        id={id ? id : ""}
        photoUrl={photo.thumbnailUrl}
        data-photoid={photo.id}
    />
);

Thumbnail.propTypes = propTypes;

export default Thumbnail;
