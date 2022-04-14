import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import SelectedBeast from './SelectedBeast';
import data from './data.json';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hearts:'',
      image_url: '',
      title: '',
      description: '',
      showModal: false,
    };
    console.log('modalTest', this.state);
  };


  hideModal = () => {
    this.setState({
      showModal: false,
    });
  };

  openModal = (image_url, title, description) => {
    console.log('modalTest', this.state);
    this.setState({
      showModal: true,
      title: title,
      image_url: image_url,
      description: description,
    });
  };


  // addhearts = () => {
  //   this.setState({
  //     hearts: this.state.hearts + ''
  //   });
  // };





    render() {
      console.log('test', this.state.props);
      return (
        <>
        
 
          <Header hearts={this.state.hearts} />
          <Main 
            // addHearts={this.addHearts} 
            openModal={this.openModal}
            data={data}

          />

          <SelectedBeast 
            title={this.state.title}
            description={this.state.description}
            image_url={this.state.image_url}
            showModal={this.state.showModal}
            hideModal={this.hideModal}
          /> 
          <Footer />
            
        </>
      )    
    }
}

export default App; 