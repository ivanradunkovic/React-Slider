import React from 'react';
import Slider from './Slider';
import Text from './Text';
import Header from './Header'
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      <Header text="Image Slider" />
      <Slider />
      <Text />
      <Footer text= "by Ivan Radunković 2020." />
    </div>
  );
}

export default App;
