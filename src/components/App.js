import React, { Component } from "react";

import { AppContainer, FeedContainer } from "./styled/containers";
import FakeThumbnails from "./styled/FakeThumbnails";
import ThumbnailCollection from "./ThumbnailCollection";

const INCREMENT = 24;

const getUrl = (cursor = 0, next = INCREMENT, albumId) =>
    `http://jsonplaceholder.typicode.com/photos?_start=${cursor}&_limit=${next}`;

class App extends Component {
    componentDidMount () {
        this.loadPhotos();
    }

    state = {
        cursor: 0,
        loading: false,
        photos: [],
        hasMorePhotos: true
    };

    loadPhotos = () => {
        const { hasMorePhotos, cursor } = this.state;

        if (hasMorePhotos) {
            const url = getUrl(cursor);

            this.setState({ loading: true });
            fetch(url)
                .then(response => response.json())
                .then(json => {
                    const newPhotosCount = json.length;

                    if (newPhotosCount) {
                        this.setState({
                            cursor: cursor + newPhotosCount
                        });
                        this.addPhotos(json);

                        if (newPhotosCount % INCREMENT !== 0) {
                            this.setState({ hasMorePhotos: false });
                        }
                    } else {
                        this.setState({ hasMorePhotos: false });
                    }
                });
        }
    };

    addPhotos = newPhotos => {
        const { photos } = this.state;
        this.setState({ photos: [...photos, ...newPhotos], loading: false });
    };

    render () {
        const { photos, loading } = this.state;
        return (
            <AppContainer>
                <FeedContainer>
                    {!!photos.length && (
                        <ThumbnailCollection
                            photos={photos}
                            loadMore={this.loadPhotos}
                        />
                    )}
                    {loading && <FakeThumbnails />}
                </FeedContainer>
            </AppContainer>
        );
    }
}
export default App;
