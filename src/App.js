import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import SelectedBeast from './SelectedBeast';
import data from './data.json';
// import ListGroup from 'react-bootstrap/ListGroup';
import { Form, Button } from 'react-bootstrap';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      howToSort: '',  
      filteredData: data,   
      hearts:'',
      image_url: '',
      title: '',
      description: '',
      showModal: false,
  
    };
}

handleSubmit = event => {
  event.preventDefault();
  // let name = event.target.name.value;
  let selected = event.target.select.value;
  this.setState({
    name: event.target.name.value,
    howToSort: selected
  });
  
}

handleSelect = (e) => {
  let choice = e.target.value;
  if (choice === 'even') {
    let newData = data.filter(num => num.horns % 2 === 0);
    this.setState({filteredData: newData});
  }else if (choice === 'odd')  {
    let newData = data.filter(num => num.horns % 2 !== 0);
    this.setState({filteredData: newData});
  }else {
    this.setState({filteredData: data});
  }
}

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


    render() { 

      // let numHorns = this.state.filteredData.map((obj, idx) => {
      //   return <ListGroup.Item key={idx}>{obj.horns}</ListGroup.Item>
      // })
      
      return (
        <>

            {/* I'm not sure if my ListGroup is supposed to be here in the <main> */}
              {/* <ListGroup>
                  {numHorns}
               </ListGroup> */}
          
          <Form onSubmit={this.handleSubmit}>
            <Form.Label>Search Number of Horns
              <Form.Control type="text" name="name"/>
            </Form.Label>
            
            <Form.Select name="select" onChange={this.handleSelect}>
              <option value="all">All</option>
              <option value="even">Even</option>
              <option value="odd">Odd</option>
            </Form.Select>
            <Button type="submit">Submit</Button>
          </Form>


          <Main 
            openModal={this.openModal}
            data={this.state.filteredData}
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


