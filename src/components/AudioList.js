import {Link} from "react-router-dom";
import React from 'react';

export default  class AudioList extends React.Component  {
  constructor(props) {
    super(props);
    this.nameArr = ['Happy', 'Confused','Fear','Neutral', 'Angry','Disgust'];

  }

  getEmotion() {
    // This creates a JSX element for every name in the list.
    return this.nameArr.map(name =>
                        <div className="text-center">
                            <Link to={"/audio/" + String(name)}><h3>{name}</h3></Link>
                        </div>
                        );
  }

  render() {
    return (
      <div className="container center-block vlsection1">
        <h1 className="text-center">Audio emotion categories</h1>
        {this.getEmotion()}
    </div>
    );
  }
}