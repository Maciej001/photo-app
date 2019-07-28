import React from "react";
import { IconContainer } from "./styled/containers";
import { CloseIcon } from "./icons";
import { PropTypes } from "prop-types";

const propTypes = {
    onClose: PropTypes.func
};

const Close = ({ onClose }) => (
    <IconContainer onClick={onClose}>
        <CloseIcon />
    </IconContainer>
);

Close.propTypes = propTypes;

export default Close;
