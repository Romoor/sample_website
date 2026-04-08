import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import GlobalStyle from '../Home Icon/GlobalStyle';
import HomeIcon from '../Home Icon/HomeIcon';
import Hero_Image from './Hero_Image/Hero_Image';


function NavbarFunction() {
    return (
        <div>
            <Hero_Image/>
            <nav className='navbar fixed-top d-inline-flex'>  
                <HomeIcon/>
                <div  className='navbar-container nav-gradient'>
                    <ButtonGroup className='button px-2 justify-content-end'>
                        <Button className='navbar-button'>Home</Button>
                        <Button className='navbar-button '>Projects</Button>
                        <Button className='navbar-button'>Experience</Button>
                        <Button className='navbar-button'>Skills</Button>
                        <Button className='navbar-button'>About Me</Button>
                        <Button className='navbar-button'>Contact</Button>
                    </ButtonGroup>
                </div>
            </nav>
    </div>
    )
}

export default NavbarFunction;