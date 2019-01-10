import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Names extends Component {
  static propTypes = {
    names: PropTypes.array.isRequired
  }

  render() {
    const { names } = this.props;

    return (
      <ul>
        {names.map((name, i) => 
          <li key={i}>Hello, {name}.</li>
        )}
    </ul>
    )
  }
}

export default Names;