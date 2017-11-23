import React, { Component } from 'react';
import Homepage from './routes/Homepage';
import About from './routes/About';
import Contact from './routes/Contact';
import Blog from './routes/Blog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Homepage />
      </div>
    );
  }
}

export default App;
