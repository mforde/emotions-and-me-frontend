import React from 'react';
import { Link } from 'react-router-dom';

  export default class Nav extends React.Component {
    render() {
      return (
        <nav className="Nav">
          <div className="Nav__container">
            <Link to="/" className="Nav__brand">
            </Link>
            <div className="Nav__right">
              <ul className="Nav__item-wrapper">
                <li className="Nav__item">
                  <Link className="Nav__link" to="/browse/audio">Audio</Link>
                </li>
                <li className="Nav__item">
                  <Link className="Nav__link" to="/browse/picture">Picture</Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      );
    }
  }