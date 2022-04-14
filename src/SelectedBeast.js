import React from "react";
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {


  handleFavorite = () => {
    this.setState({
      favorite: this.state.favorite + 1
    });
  };

  // handleTitleClick = () => {
  //   this.props.openModalHandler(this.props.name);
  // };




  render() {
    return (
      <>

        <Modal
          show={this.props.openModal}
          onHide={this.props.hideModalHandler}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {this.state.title}
            </Modal.Title>
          </Modal.Header>
        </Modal>

        {/* onClick={

        } */}
      </>
    )
  };

}

export default SelectedBeast