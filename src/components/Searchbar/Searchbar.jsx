import React, { Component } from 'react';
// import PropTypes from 'prop-typs';
import { SearchHeader, SearchForm } from 'components/Searchbar/SearchbarStyled';

export class Searchbar extends Component {
  state = {
    keyWord: '',
  };

  handelInput = ({ target }) => {
    this.setState({
      keyWord: target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onKeyWord(this.state.keyWord);
  };

  render() {
    return (
      <SearchHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handelInput}
            value={this.state.keyWord}
          />
        </SearchForm>
      </SearchHeader>
    );
  }
}

export default Searchbar;
