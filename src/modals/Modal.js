import React, { Component, createRef } from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import { ModalContainer } from "../components/styled/containers";
import { keys } from "../constants";
import Close from "../components/Close";

const ChildrenWrapper = styled.span`
    position: relative;
`;

const propTypes = {
    onCancel: PropTypes.func.isRequired,
    children: PropTypes.element
};

class Modal extends Component {
    componentDidMount = () => {
        document.addEventListener("mousedown", this.handleClickOutside);
        document.addEventListener("keydown", this.onKeyDown);
    };

    componentWillUnmount () {
        document.removeEventListener("mousedown", this.handleClickOutside);
        document.removeEventListener("keydown", this.onKeyDown);
    }

    modalRef = createRef();

    setModalRef = element => {
        this.modalRef = element;
    };

    handleClickOutside = e => {
        if (this.modalRef && !this.modalRef.contains(e.target)) {
            this.props.onCancel();
        }
    };

    onKeyDown = e => {
        const key = e.which;

        if (key === keys.ESC) {
            this.props.onCancel();
        }
    };

    render () {
        return (
            <ModalContainer>
                <ChildrenWrapper innerRef={this.setModalRef}>
                    {this.props.children}
                    <Close onClose={this.props.onCancel} />
                </ChildrenWrapper>
            </ModalContainer>
        );
    }
}

Modal.propTypes = propTypes;

export default Modal;
