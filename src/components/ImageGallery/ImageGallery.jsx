import React, { Component } from 'react';
import pixabayApi from 'components/servises/pixabayApi';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
// import { Gallery } from './ImageGalleryStyled';

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
    // console.log(this.state.photos);
    return (
      <>
        <>
          <ImageGalleryItem arrayPhotos={this.state.photos} />
        </>
      </>
    );
  }
}

export default ImageGallery;