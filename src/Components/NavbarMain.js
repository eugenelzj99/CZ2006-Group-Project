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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomeBody from './HomeBody';
import Discover from './Discover';
import ViewMap from './ViewMap';
import Planner from './Planning';

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
        <Nav.Link href="/Home"><h7 className="linkText">Home</h7></Nav.Link>
        <Nav.Link href="/Discover"><h7 className="linkText">Discover</h7></Nav.Link>
        <Nav.Link href="/ViewMap" ><h7 className="linkText">View Map</h7></Nav.Link>
        <Nav.Link href="/Planner"><h7 className="linkText">Planner</h7></Nav.Link>
        
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
  <Router>
        <Switch>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" component={HomeBody} />

          <Route exact path="/Home" component={HomeBody} />

          <Route exact path="/Discover" component={Discover} />
  
          <Route exact path="/ViewMap" component={ViewMap} />

          <Route exact path="/Planner" component={Planning} />
        </Switch>
  </Router>
  </div>
  
    )
  }
  
}

export default Example;