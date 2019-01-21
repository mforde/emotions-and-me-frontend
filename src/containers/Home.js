import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeatureGrid from "../components/FeatureGrid";

class Home extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
  }

  render() {
    const { isLoggedIn } = this.props;

    if (!isLoggedIn) {
      return (
        <div className="w3-center">
          <h1> Welcome to Emotions & Me! </h1>
          <h3> Please log in or sign up. </h3>
        </div>
        
         
      );
    }

    return (
      <div>
        <FeatureGrid/>
      </div>
    )
  }
}

export default Home;
