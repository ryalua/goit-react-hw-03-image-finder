import React, { Component } from 'react';
// import PropTypes from 'prop-typs';
import { SearchHeader, SearchForm } from 'components/Searchbar/SearchbarStyled';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  // handelInput = ({ target: { value } }) => {
  //   this.setState({ value });
  // };

  handelInput = ({ target }) => {
    this.setState({
      value: target.value,
    });
    // console.log(target);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleKeyWord(this.state.value);
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
            value={this.state.value}
          />
        </SearchForm>
      </SearchHeader>
    );
  }
}

export default Searchbar;

// export class Searchbar extends Component {
//   render() {
//     return (
//       <SearchHeader>
//         <form className="form">
//           <button type="submit" className="button">
//             <span class="button-label">Search</span>
//           </button>

//           <input
//             className="input"
//             type="text"
//             autocomplete="off"
//             autofocus
//             placeholder="Search images and photos"
//           />
//         </form>
//       </SearchHeader>
//     );
//   }
// }
