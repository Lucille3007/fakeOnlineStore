import React from 'react'

import {Container, Navbar, Nav} from 'react-bootstrap'

import logo from '../images/everything.png'
import { BiCart } from 'react-icons/bi';
import { useCart } from 'react-use-cart';


const NavbarHeadline = () => {

    const {
        isEmpty,
        totalItems
    } = useCart();

    return (
        <Navbar expand="md" className="bg-body-tertiary" style={{ width: '100%', position:'fixed', zIndex: 100}}>
        <Container>
            <Nav.Link href='/'>
                <Navbar.Brand href='/'>
                    <img
                      alt="logo"
                      src={logo}
                      width="40"
                      height="40"
                      className="d-inline-block align-top"
                    />{' '}
                    <h3> Lusil's Digital Closet </h3>
                </Navbar.Brand>
            </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <span> &nbsp; &nbsp;</span>
              <Nav.Link href="/"><b>Home</b></Nav.Link>
              <Nav.Link href="/products"><b>Products</b></Nav.Link>
              <Nav.Link href="/about"><b>About</b></Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href='/cart'>
                <BiCart size={'2rem'}/>
                {!isEmpty && <span style={{ position: 'relative', left: '-21px', top: '-18px'}}>{totalItems}</span>}
                <span style={{ marginLeft: !isEmpty ? '-13px': 0}}>&nbsp; <b>Cart</b> </span>
            </Nav.Link>            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );  
};

export default NavbarHeadline