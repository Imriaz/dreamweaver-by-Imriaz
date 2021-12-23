import React from 'react';
import './Navigation.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import BannerImg1 from '../../../images/FlowerImage.jpg';
import BannerImg2 from '../../../images/BannerImage.PNG';

const Navigation = () => {
    return (
        <section>
            <div className="row">
                <div className="col-md-6">
                    <Navbar bg="primary" variant="dark" expand="lg">
                        <Container>
                            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mx-auto">
                                    <Nav.Link href="#home">HOME</Nav.Link>
                                    <Nav.Link href="#aboutUs">ABOUT US</Nav.Link>
                                    <Nav.Link href="#articles">ARTICLES</Nav.Link>
                                    <NavDropdown title="PHOTOS" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#Image1">PHOTOS 1</NavDropdown.Item>
                                        <NavDropdown.Item href="#Image2">PHOTOS 2</NavDropdown.Item>
                                        <NavDropdown.Item href="#Image3">PHOTOS 3</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#contactUs">CONTACT US</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <div className="p-3 nav-firstWidth">
                        <h2 className='font-weight-bold'>YOUR SITE NAME</h2>
                        <h6 className="nav-text">YOUR SLOGAN COMES HERE</h6>
                    </div>
                </div>
                <div className="col-md-6 nav-secondWidth">
                    <div>
                        <img className="nav-img" src={BannerImg1} alt="Flower" />
                        <img className="nav-img" src={BannerImg2} alt="Banner" />
                        <img className="nav-img" src={BannerImg1} alt="Flower" />
                    </div>
                </div>
            </div>

            <div className="bg-primary p-2">

            </div>
        </section>

    );
};

export default Navigation;