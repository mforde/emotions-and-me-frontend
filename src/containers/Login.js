import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAllNames } from '../actions';
import Names from '../components/Names.js';
import NavBar from "../components/NavBar";
import FeatureGrid from "../components/FeatureGrid";

class Login extends Component {
  render() {
    return "This is a placeholder for login"
  }
}

export default Login;