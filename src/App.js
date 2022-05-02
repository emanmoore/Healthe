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
import Fruit from './components/Fruit'
import Water from './components/Water'
import Track from './components/Track'
import WaterPage from './components/WaterPage'
import Wapp from './components/Wapp'
import WaterForm from './components/WaterForm';








function App() {
  return (

    


    <BrowserRouter>
    <div className="App">
     <div style={{height:"5vh"}}>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Cutie Fruitie</Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link as={Link} to="/home">Home</Nav.Link>
    <Nav.Link as={Link} to="/fruit">Fruit</Nav.Link>
     <Nav.Link as={Link} to="/water">Water</Nav.Link>
     <Nav.Link as={Link} to="/track">Track</Nav.Link>
     <Nav.Link as={Link} to="/waterpage">Water Page</Nav.Link>
     <Nav.Link as={Link} to="/wapp">Wapp</Nav.Link>
     <Nav.Link as={Link} to="/waterform">WaterForm</Nav.Link>
  </Nav>
    </Container>
  
  </Navbar>
  
</div>
<div style={{height:"95vh"}}>
  <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/fruit" element={<Fruit/>}/>
     <Route path="/water" element={<Water/>}/>
     <Route path="/track" element={<Track/>}/>
     <Route path="/waterpage" element={<WaterPage/>}/>
     <Route path="/Wapp" element={<Wapp/>}/>
     <Route path="/waterform" element={<WaterForm/>}/>
</Routes>
</div>

    </div>
    </BrowserRouter>
    
  );
}

export default App;
