import React from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header_Auth = (props) =>{
    if(props.isAuth){
        return (
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/users"><span className="fas fa-users" /> Users</Nav.Link>
                    <NavDropdown title="Account" id="collasible-nav-dropdown">
                        <NavDropdown.Item href={`/users/${props.current_user.id}`}><span className="fas fa-user-cog"/> Profile</NavDropdown.Item>
                        <NavDropdown.Item href="/accounts/edit"><span className="fas fa-cog"/> Settings</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/accounts/logout"><span className="fas fa-sign-out-alt"/> Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        );
    } else {
        return (
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/accounts/signin"><span className="fas fa-sign-in-alt" /> Signin</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        );
    }
}

//Header require props.isAuth
const Header = (props) =>{
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Micropost</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Header_Auth 
                {...props}
            />
        </Navbar>
    );
}


export default Header;