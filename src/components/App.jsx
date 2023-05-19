import React, { Component } from 'react';
// import { Searchbar } from 'components/Searchbar/Searchbar';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';

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
        <Searchbar handleKeyWord={this.handleKeyWord} />
        <ImageGallery keyWord={this.state.keyWord} />
      </div>
    );
  }
}

export default App;
