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
            <li className="">About</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    )
  }

}

export default Header
