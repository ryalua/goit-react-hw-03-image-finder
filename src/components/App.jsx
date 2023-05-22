import React, { Component } from 'react';
// import { Searchbar } from 'components/Searchbar/Searchbar';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class App extends Component {
  state = {
    keyWord: '',
  };

  handleKeyWord = keyWord => {
    this.setState({ keyWord });
  };

  render() {
    return (
      <div>
        <Searchbar onKeyWord={this.handleKeyWord} />
        <ImageGallery keyWord={this.state.keyWord}>
          <ImageGalleryItem />
        </ImageGallery>
      </div>
    );
  }
}

export default App;
