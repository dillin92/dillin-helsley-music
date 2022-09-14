import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';

const Navbar = () => {

    return (
     <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    Dillin Helsley Music
                </NavLogo>
                <MobileIcon>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks href="#videos">Videos</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks href="#about">About</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks href="#contact">Contact</NavLinks>
                    </NavItem>
                    
                </NavMenu>
            </NavbarContainer>
        </Nav>
     </>
    )
}


export default Navbar;
