import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Data from './data.json';

class App extends React.Component {

    render() {
      return (
      <>
        <Header 
          title ="Gallery of Horns" 
        />

        <Main data={Data}>
          
        </Main>
        <Footer>
          
        </Footer>
      </>
      )    
    }
}

export default App; 