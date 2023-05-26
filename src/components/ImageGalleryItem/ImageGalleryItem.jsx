import React, { Component } from 'react';
import { GalleryItem } from './ImageGalleryItemStyled';

export class ImageGalleryItem extends Component {
  render() {
    const { arrayPhotos } = this.props;

    // console.log(this.props);
    return (
      <>
        {arrayPhotos &&
          arrayPhotos.map(({ id, webformatURL, largeImageURL, tags }) => {
            return (
              <GalleryItem key={id}>
                <a className="gallery-item" href={largeImageURL}>
                  <div className="image">
                    <img
                      src={webformatURL}
                      alt={tags}
                      // width="600"
                      // height="400"
                      // loading="lazy"
                    />
                  </div>
                </a>
              </GalleryItem>
            );
          })}
      </>
    );
  }
}

export default ImageGalleryItem;
