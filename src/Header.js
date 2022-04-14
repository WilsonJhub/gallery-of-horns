import React from 'react';

class Header extends React.Component {


  render() {
    return (
      <>
      <h1>
        Gallery of Horns{this.props.hearts}
      </h1>
      </>
    )
  }
}
export default Header