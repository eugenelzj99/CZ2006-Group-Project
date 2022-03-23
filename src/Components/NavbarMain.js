import React ,{ useEffect, useState, Component } from 'react'
import { Link } from 'react-router-dom';
import { Nav, Navbar,NavDropdown,Container} from 'react-bootstrap';

  import { NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
   import LoginModal from './common/modal/LoginModal';         
import AuthModal from './AuthModal';
import Planning from './Planning';
import { connect } from 'react-redux'
class Example extends Component {
  constructor(props) {
    super(props);

    
    this.state = {
      isNavOpen: false,
      isModalOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }
  handleLogin(event) {
    this.toggleModal();
    alert("Username: " + this.username.value + " Password: " + this.password.value
        + " Remember: " + this.remember.checked);
    event.preventDefault();

}
  render() {
    return (
    <div>
       <div class = "banner">
        logo
        
    </div>
      <Navbar className="nav-color" variant="light" expand="lg">
    <Container>
     
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#"><h7 className="linkText">Home</h7></Nav.Link>
          <Nav.Link href="#link"><h7 className="linkText">Discover</h7></Nav.Link>
          <Nav.Link href="#"><h7 className="linkText">View Map</h7></Nav.Link>
          <Nav.Link href="#link"><h7 className="linkText">Planner</h7></Nav.Link>
        </Nav>
    
        <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                </NavItem>
                            </Nav>           
      </Navbar.Collapse>
      
    </Container>
 
    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                               
                                <Input type="text" id="username" placeholder='Username' name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" id="password" placeholder='Password' name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                          
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>   
 
                      
  </Navbar>
  </div>
    )
  }
}
export default Example;