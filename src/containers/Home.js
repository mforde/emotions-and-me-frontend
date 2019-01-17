import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAllNames } from '../actions';
import Names from '../components/Names.js';
import NavBar from "../components/NavBar";
import FeatureGrid from "../components/FeatureGrid";

class Home extends Component {
  static propTypes = {
    names: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAllNames());
  }

  render() {
    const { names, isFetching } = this.props;

    const namesList = isFetching ? "Loading..." : <Names names={names} />
    return (
      <div>
        {namesList}
        <FeatureGrid/>
      </div>
    )
  }
}

const mapStateToProps = state => state.allNames;

export default connect(
  mapStateToProps
)(Home);