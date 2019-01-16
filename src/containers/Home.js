import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAllNames } from '../actions';
import Names from '../components/Names.js';

class Home extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    names: PropTypes.array.isRequired,
    fetchAllNames: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.fetchAllNames();
  }

  render() {
    const { names, isFetching } = this.props;

    if (isFetching) {
      return  "Loading...";
    }

    return (
      <div>
        <Names names={names} />
      </div>
    )
  }
}

const mapStateToProps = state => state.allNames;

const mapDispatchToProps = {
  fetchAllNames,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);