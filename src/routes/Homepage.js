import React, { Component } from 'react'
import Header from '../components/Header';
import styled from 'styled-components';

import { ImageBox, Welcome } from '../components/styled/styles.js';

class Homepage extends Component {
  render() {
    return(
      <div className="Homepage">
        <Header />
        <ImageBox>
          <Welcome>
            <h1>Welcome to Strom Comm</h1>
            <h3>We're passionate about helping companies connect
            to potential customers</h3>
            <p>Need a little help with marketing strategy and execution? You’re in the right place. We love finding ways for you to connect with potential clients, giving them the reasons to hire you. Let us strategize and develop your marketing plan so you can focus on what you do best. </p>
          </Welcome>
        </ImageBox>
      </div>
    )
  }
}

export default Homepage;
