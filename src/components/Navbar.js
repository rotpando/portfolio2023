import "./bootstrap.min.css";  
import "./nav.css"

import {Nav, Navbar} from 'react-bootstrap';  

function navbar() {  
  return (  
    <Navbar className="navbar">  
    <div className="navcenter">

        <Nav className="navcontainer">  
          <Nav.Link className="linknav" href="#home">Home</Nav.Link>  
          <Nav.Link className="linknav" href="#about">Bio</Nav.Link>
          <Nav.Link className="linknav" href="#projects">Proyectos</Nav.Link>
          <Nav.Link className="linknav" href="#resume">C.V.</Nav.Link>
          <Nav.Link className="linknav" href="#contact">Conctacto</Nav.Link> 
          <div className="animation start-home"></div>
        </Nav>   
         
    </div> 
     
  </Navbar>  
  );  
}  
export default navbar;  