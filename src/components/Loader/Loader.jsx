import React, { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';

export class Loader extends Component {
  render() {
    const { loading } = this.props.onSpinner;
    return (
      loading && (
        <div>
          <ThreeDots
            height="580"
            width="580"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      )
    );
  }
}

export default Loader;
