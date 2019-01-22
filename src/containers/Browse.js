import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import  PictureList from '../components/PictureList.js'
import Nav from '../components/nav';
import { withRouter } from 'react-router-dom';



import '../App.css';










   export default class Browse extends React.Component {
    render() {
      return (
        <div className="browse">
               <Link to={"/picturelist"}><h3>Picture</h3></Link>
                <Link to={"/audiolist"}><h3>Audio</h3></Link>

        </div>
      );
    }
  }


