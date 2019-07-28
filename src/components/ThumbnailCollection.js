import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";

import { CollectionContainer } from "./styled/containers";
import Thumbnail from "./Thumbnail";
import Modal from "../modals/Modal";
import Photo from "./Photo";
import { createObserver } from "./utils";

const propTypes = {
    photos: PropTypes.arrayOf(
        PropTypes.shape({
            albumId: PropTypes.number,
            id: PropTypes.number.isRequired,
            url: PropTypes.string.isRequired,
            thumbnailUrl: PropTypes.string.isRequired
        })
    ),
    loadMore: PropTypes.func.isRequired
};

class ThumbnailCollection extends Component {
    componentDidMount () {
        this.startObserving();
    }

    shouldComponentUpdate (prevProps) {
        return prevProps.photos.length !== this.props.photos.length;
    }

    componentDidUpdate () {
        if (!this.state.observer) {
            this.startObserving();
        }
    }

    state = {
        isModalVisible: false,
        photoUrl: "",
        observer: null
    };

    startObserving () {
        if (!this.state.observer) {
            const observer = createObserver(this.onIntersection);
            this.setState({ observer });
        }
    }

    onIntersection = (entries, self) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                this.props.loadMore();
                self.unobserve(entry.target);
                this.setState({ observer: null });
            }
        });
    };

    onClick = e => {
        const photoId = e.target.dataset.photoid;
        const photo = this.props.photos.find(
            photo => photo.id === parseInt(photoId, 10)
        );
        this.setState({ photoUrl: photo.url, isModalVisible: true });
    };

    onCancel = () => {
        this.setState({ photoUrl: "", isModalVisible: false });
    };

    render () {
        const { photos } = this.props;
        const { isModalVisible, photoUrl } = this.state;

        return (
            <Fragment>
                <CollectionContainer onClick={this.onClick}>
                    {photos.map((photo, index) => {
                        const isLastInCollection = photos.length - 1 === index;

                        return (
                            <Thumbnail
                                id={isLastInCollection ? "last-photo" : ""}
                                key={index}
                                photo={photo}
                            />
                        );
                    })}
                </CollectionContainer>
                {isModalVisible && (
                    <Modal onCancel={this.onCancel}>
                        <Photo photoUrl={photoUrl} />
                    </Modal>
                )}
            </Fragment>
        );
    }
}

ThumbnailCollection.propTypes = propTypes;

export default ThumbnailCollection;
