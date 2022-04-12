import React from 'react';
import HornedBeast from './Hornedbeast';
class Main extends React.Component {
  
  render() {
    return (
    <>
      <HornedBeast title="The Biggest Beast of them All" imageUrl="TBD" description="strong horns, big bull makes loud noises."></HornedBeast>
    
    <HornedBeast title="The Second Biggest Beast of them All" imageUrl="TBD" description="strong horns, big bull makes small noises."></HornedBeast>

    </>
    )
  }
}

export default Main