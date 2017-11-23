import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

import Logo from '../images/SC-Logo.png';
import HeaderWrapper from './styled/HeaderWrapper';

const LogoContainer = styled.div`
  padding-left: 10px;
  width: 95px;
  height: 55px;
`
const Img = styled.img`
  width: inherit;
  height: inherit;
`
const Nav = styled.div`
  width: 50%;
  height: inherit;
  justify-content: center;
  align-items: center;
  display: flex;
  list-style-type: none;
  font-size: 20px;
`
const List = styled.li`
  padding-right: 40px;
`

class Header extends Component {
  render() {
    return(
      <HeaderWrapper>
        <LogoContainer>
          <Img src={Logo} alt="" />
        </LogoContainer>
        <Nav>
          <List>About</List>
          <List>Contact</List>
          <List>Blog</List>
        </Nav>
      </HeaderWrapper>
    )
  }

}

export default Header;
