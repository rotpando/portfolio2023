import "./bootstrap.min.css";  
import "./nav.css"

import {Nav, Navbar} from 'react-bootstrap';  

function navbar() {  
  return (  
    <Navbar className="navbar">  
    <div className="navcenter">

        <Nav className="navcontainer">  
          <Nav.Link className="linknav" href="home">Home</Nav.Link>  
          <Nav.Link className="linknav" href="about">about</Nav.Link>
          <Nav.Link className="linknav" href="projects">peojects</Nav.Link>
          <Nav.Link className="linknav" href="resume">resume</Nav.Link>
          <Nav.Link className="linknav" href="contact">Conctact</Nav.Link> 
          <Nav.Link className="linknav" href="link">EN/ES/DE</Nav.Link>
          <Nav.Link className="linknav" href="link">*/+</Nav.Link>
          <div className="animation start-home"></div>
        </Nav>   
         
    </div> 
     
  </Navbar>  
  );  
}  
export default navbar;  