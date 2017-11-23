import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

import Logo from '../images/SC-Logo.png';
import HeaderWrapper from './styled/HeaderWrapper';

const LogoContainer = styled.div`
  padding-left: 120px;
  width: 115px;
  height: 65px;
`
const Img = styled.img`
  width: inherit;
  height: inherit;
`
const Nav = styled.div`
  width: 50%;
  height: inherit;
  justify-content: space-around;
  align-items: center;
  display: flex;
  list-style-type: none;
  font-size: 20px;
  text-transform: uppercase;
`

class Header extends Component {
  render() {
    return(
      <HeaderWrapper>
        <LogoContainer>
          <Img src={Logo} alt="" />
        </LogoContainer>
        <Nav>
          <p>About</p>
          <p>Contact</p>
          <p>Blog</p>
        </Nav>
      </HeaderWrapper>
    )
  }

}

export default Header;
