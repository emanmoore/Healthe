import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Container} from 'react-bootstrap'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


import Home from './components/Home'
import About  from './components/About'
import Login  from './components/Login'
import Water from './components/Water'
import Track from './components/Track'
import Fruit from './components/Fruit'







function App() {
  return (

    


    <BrowserRouter>
    <div className="App">
     <div style={{height:"5vh"}}>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Cutie Fruitie</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link}to="/home">Home</Nav.Link>
      <Nav.Link as={Link}to="/login">Login</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/water">Water</Nav.Link>
      <Nav.Link as={Link} to="/fruit">Fruit</Nav.Link>
      <Nav.Link as={Link} to="/track">Track</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
    </Nav>
    </Container>
  
  </Navbar>
  
</div>
<div style={{height:"95vh"}}>
  <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/water" element={<Water/>}/>
     <Route path="/track" element={<Track/>}/>
     <Route path="/fruit" element={<Fruit/>}/>
</Routes>
</div>
{/* add footer */}
    </div>
    </BrowserRouter>
    
  );
}

export default App;
