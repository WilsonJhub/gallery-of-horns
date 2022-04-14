import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import SelectedBeast from './SelectedBeast';
import Data from './data.json';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  };

    render() {
      return (
      <>
        <Header 
          title ="Gallery of Horns" 
        />

        <Main 
          data={Data}
        />
        <Footer>
          
        </Footer>
      </>
      )    
    }
}

export default App; 