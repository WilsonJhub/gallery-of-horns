import React from "react";
import { ModalBody } from "react-bootstrap";
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
          show={this.props.showModal}
          onHide={this.props.hideModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {this.props.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.image_url} alt={this.props.description} />
            <p>{this.props.description}</p>

          </Modal.Body>
        </Modal>

        {/* onClick={

        } */}
      </>
    )
  };

}

export default SelectedBeast