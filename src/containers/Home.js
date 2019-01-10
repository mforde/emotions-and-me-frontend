import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAllNames } from '../actions';
import Names from '../components/Names.js';

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

export default connect(
  mapStateToProps
)(Home);