import React, { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
// import { Button } from 'components/Button/Button';

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
        <ImageGallery keyWord={this.state.keyWord} />
        {/* <ImageGalleryItem /> */}
        {/* </ImageGallery> */}
        {/* <Button /> */}
      </div>
    );
  }
}

export default App;
