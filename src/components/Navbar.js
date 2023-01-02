import "./bootstrap.min.css";  
import "./nav.css"

import {Nav, Navbar, Container} from 'react-bootstrap';  

function navbar() {  
  return (  
    <Navbar className="navbar">  
    <div className="navcenter">
        <Nav className="navcontainer">  
          <Nav.Link className="linknav" href="#home">Home</Nav.Link>  
          <Nav.Link className="linknav" href="#link">Projects</Nav.Link>
          <Nav.Link className="linknav" href="#link">Skills</Nav.Link>
          <Nav.Link className="linknav" href="#link">Bio</Nav.Link>
          <Nav.Link className="linknav" href="#link">Conctact</Nav.Link> 
          <Nav.Link className="linknav" href="#link">EN/ES/DE</Nav.Link>
          <Nav.Link className="linknav" href="#link">*/+</Nav.Link>
          <div className="animation start-home"></div>
        </Nav>   
         
    </div> 
     
  </Navbar>  
  );  
}  
export default navbar;  