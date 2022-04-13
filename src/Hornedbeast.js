import React from 'react'
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

  render(){
    return (
        
      <article className='Beasts'>
        <h2>{this.props.title}</h2>  
        <p>{this.state.favorite} Favorite</p>
        <p onClick={this.handleFavorite}>CLICK ME IF I'M YOUR FAVORITE</p>
          <img
            title={this.props.title}
            src={this.props.imageUrl}
            alt={this.props.description}
          />
          {/* {this.props.description} */}
      </article>

    )
  }
}

export default Hornedbeast
