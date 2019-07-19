import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
class NavbarPage extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <MDBNavbar color="blue-gradient" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text">Navbar</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem active>
                            <MDBNavLink to="../../../pages/home/Home.js">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="../../../pages/about/About.js">About Us</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="../../../pages/guardian home/GuardianHome.js">Guardian Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="../../../pages/shop/Shop.js">Shop</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        {/* <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
              <MDBIcon fab icon="twitter" />
            </MDBNavLink>
          </MDBNavItem> */}
                        <MDBNavItem>
                            <MDBNavLink className="waves-effect waves-light" to="#!">
                                <MDBIcon fa-fa icon="shopping-cart" />
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <MDBIcon icon="user" />
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default" left>
                                    <MDBDropdownItem href="#!">Sign In</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Sign Out</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Subscribe</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default NavbarPage;