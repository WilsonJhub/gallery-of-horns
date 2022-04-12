import React from 'react'



class Hornedbeast extends  React.Component {

  render(){
    return (

      <article className='Beasts'>
        <h2>
          {this.props.title}
        </h2>  
        <img
          src={this.props.imageUrl}
          alt={this.props.description}
          title={this.props.title}
        />
        <p>
          {this.props.description}
        </p>
      </article>

    )
  }
}

export default Hornedbeast
