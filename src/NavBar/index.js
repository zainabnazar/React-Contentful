import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavBar";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/flowers" activeStyle>
                        Flowers
          </NavLink>
                    <NavLink to="/animals" activeStyle>
                        Animals
          </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;