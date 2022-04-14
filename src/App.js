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
  }

  hideModalHandler = () => {
    this.setState({
      showModal: false,
    });
  };

  openModalHandler = (image_url, title, description) => {
    this.setState({
      showModal: true,
      title: title,
      image_url: image_url,
      description: description,
    });
  };


  addhearts = () => {
    this.setState({
      hearts: this.state.hearts + '💙'
    });
  };





    render() {
      return (
        <>
          <Header hearts={this.state.hearts} />
          <Main 
            addHearts={this.addHearts} 
            openModalHandler={this.openModalHandler}
            data={data}

          />

          <SelectedBeast 
            title={this.state.title}
            description={this.state.description}
            image_url={this.state.image_url}
            openModal={this.state.showModal}
            hideModalHandler={this.hideModalHandler}
          />
            <Footer />
        </>
      )    
    }
}

export default App; 