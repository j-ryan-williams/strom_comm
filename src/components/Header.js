import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from '../images/SC-Logo.png';

class Header extends Component {
  render() {
    return(
      <div className="Header-Container">
        <div className="Logo">
          <img id="Logo-Img" src={Logo} alt="" />
        </div>
        <div className="Header-List">
          <ul>
            <li className="List" id="About">About</li>
            <li className="List" id="Contact">Contact</li>
            <li className="List" id="Blog">Blog</li>
          </ul>
        </div>
        <div className="Social-Container">
          <p>twitter</p>
          <p>facebook</p>
          <p>instagram</p>
        </div>
      </div>
    )
  }

}

export default Header
