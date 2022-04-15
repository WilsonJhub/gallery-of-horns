import React from 'react';
import HornedBeast from './Hornedbeast';
import './Main.css';
// import { Row } from 'react-bootstrap';

class Main extends React.Component {
  
  render() {
    return (

      <main>
        {this.props.data.map((beast, idx) => {
          return (

            <HornedBeast 
              title={beast.title}
              image_url={beast.image_url}
              description={beast.description}
              key={idx}
              openModal={this.props.openModal}
              
            />
          )
        })};
      </main>    
    )
  }
}

export default Main