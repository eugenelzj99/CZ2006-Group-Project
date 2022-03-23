import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import { Nav, Navbar,NavDropdown,Container} from 'react-bootstrap';
import NavbarMain from './Components/NavbarMain';
import HomeBody from './Components/HomeBody';
import Example from './Components/NavbarMain';
import AuthService from "./services/auth.service";
import Login from './Components/login.component';
import Register from './Components/register.component';
import Home from './Components/home.component';
import Profile from './Components/profile.component';
import BoardUser from './Components/board-user.component';
import BoardModerator from './Components/board-moderator.component';
import BoardAdmin from './Components/board-admin.component';
import Dashboard from './Components/Dashboard';
import ViewMap from './Components/ViewMap'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';   

  
  function App() {
    return (
      <BrowserRouter>
    <div>
   <Example />
   </div>
   </BrowserRouter>
    );
  
}
export default App;