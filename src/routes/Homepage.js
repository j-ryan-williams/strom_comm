import React, { Component } from 'react'
import Header from '../components/Header';
import styled from 'styled-components';

const ImageBox = styled.div`
  background: #134e5e;
  background: -webkit-linear-gradient(to right, #134e5e, #71b280);
  background: linear-gradient(to right, #134e5e, #71b280);
  width: 100%;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Welcome = styled.div`
  font-family: Open Sans;
  color: white;
`

class Homepage extends Component {
  render() {
    return(
      <div className="Homepage">
        <Header />
        <ImageBox>
          <Welcome>
            <p>Welcome to Strom Comm</p>
          </Welcome>
        </ImageBox>
      </div>
    )
  }
}

export default Homepage;
