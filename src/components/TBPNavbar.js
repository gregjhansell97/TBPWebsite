import React, {Component} from "react";

// reactstrap
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    NavbarText
} from "reactstrap"


class TBPNavbar extends Component {
    render() {
        return (
            <div>
                <h1> BANNER </h1>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">TBP Rensselaer</NavbarBrand>
                    <Nav>
                        <NavItem>
                            <NavLink href="/events"> Events </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/members"> Members </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/officers"> Officers </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default TBPNavbar;
