import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavBar";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Flowers
          </NavLink>
                    <NavLink to="/animals" activeStyle>
                        Animals
          </NavLink>
                    <NavLink to="/api" activeStyle>
                        API
          </NavLink>
                    <NavLink to="/apifetch" activeStyle>
                        API Fetch
          </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;