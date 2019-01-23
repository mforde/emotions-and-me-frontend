import React, { Component } from 'react';


class VideoStreaming extends Component {
  render() {
    return (
      <div className="form-container" class="middle_align"

      >Enter Video Link
        <VideoLinkSearchForm />
      </div>

    );
  }
}

export default VideoStreaming;

class VideoLinkSearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    //send value to backend
    alert('A link was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Link:
          <input type="Enter Video Link Here" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export {VideoLinkSearchForm}
