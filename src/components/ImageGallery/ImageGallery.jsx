import React, { Component } from 'react';
import pixabayApi from 'components/servises/pixabayApi';
import { Gallery } from './ImageGalleryStyled';

export class ImageGallery extends Component {
  state = {
    photos: null,
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log(this.state.photos);
    if (prevProps.keyWord !== this.props.keyWord) {
      pixabayApi(this.props.keyWord)
        .then(response => response)
        .then(photos => this.setState({ photos: photos.hits }));
    }
  }
  render() {
    const { photos } = this.state;
    console.log(this.state.photos);
    return (
      <>
        <Gallery>
          {photos &&
            photos.map(({ id, webformatURL, largeImageURL, tags }) => {
              // console.log(this.state.photos);
              return (
                <li key={id}>
                  <a className="gallery-item" href={largeImageURL}>
                    <div className="photo-card">
                      <img
                        src={webformatURL}
                        alt={tags}
                        // width="600"
                        // height="400"
                        // loading="lazy"
                      />
                    </div>
                  </a>
                </li>
              );
            })}
        </Gallery>
      </>
    );
  }
}

export default ImageGallery;
