import React, { Component } from 'react';
import pixabayApi from 'components/servises/pixabayApi';

export class ImageGallery extends Component {
  state = {};

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props);
    if (prevProps.keyWord !== this.props.keyWord) {
      pixabayApi(this.props.keyWord);
    }
  }
  render() {
    return <div>ImageGallery</div>;
  }
}

export default ImageGallery;
