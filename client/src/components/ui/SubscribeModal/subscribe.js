import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBInput, MDBModalFooter, MDBIcon } from
'mdbreact';

class ModalPage extends Component {
state = {
  modal2: false,
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
    return (
      <MDBContainer>
        <MDBBtn rounded onClick={this.toggle(3)}>Launch Modal subscription Form</MDBBtn>
        <MDBModal isOpen={this.state.modal3} toggle={this.toggle(3)}>
          <MDBModalHeader className="text-center" titleClass="w-100 font-weight-bold" toggle={this.toggle(3)}>Subscribe</MDBModalHeader>
          <MDBModalBody>
            <form className="mx-3 grey-text">
              <MDBInput label="Your name" icon="user" group type="text" validate />
              <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong" success="right" />
            </form>
          </MDBModalBody>
          <MDBModalFooter className="justify-content-center">
            <MDBBtn block rounded gradient="blue" onClick={this.toggle(2)}>SEND
              <MDBIcon far icon="paper-plane" className="ml-2" />
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;