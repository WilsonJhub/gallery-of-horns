import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col'
import './Hornedbeast.css'


class Hornedbeast extends  React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: 0
    }; 
  }

  handleFavorite = () => {
    this.setState({
      favorite: this.state.favorite + 1
    });
  }

  handleTheModal = () => {
    console.log('test', this.props);
    this.props.openModal(this.props.image_url,this.props.title,this.props.description)
    };
  


  render(){
    return (
        
      <article className='Beasts'>
        <h2>{this.props.title}</h2>  
        <p>{this.state.favorite} Favorite</p>
        <p onClick={this.handleFavorite}>CLICK ME IF I'M YOUR FAVORITE</p>
          <img
            title={this.props.title}
            src={this.props.image_url}
            alt={this.props.description}
            onClick={this.handleTheModal}
            // onClick={this.props.addHearts}
            />
            {this.props.description}
      </article>

    )
  };
}

export default Hornedbeast
