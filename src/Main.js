import React from 'react';
import HornedBeast from './Hornedbeast';
import './Main.css';

class Main extends React.Component {
  
  render() {
    return (
    <main>
      {this.props.data.map((beast) => {
        return (
        <HornedBeast 
          title={beast.title}
          imageUrl={beast.image_url}
          description={beast.description}
          key={beast._id}
        />
      )
        })};
    </main>
      
    )
  }
}

export default Main