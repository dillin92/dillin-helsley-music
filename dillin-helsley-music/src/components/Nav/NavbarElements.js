import styled from 'styled-components';
import {Link as LinkR } from 'react-router-dom';



export const Nav = styled.nav`
    background: #C63BCC;
    height: 80px;
    display: flex;
    justify-content; center;
    align-items: center;
    font-size: 1rem;
    postition: sticky;
    top: 0;
    z-index: 10;



    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;;

@media screen and (max-width: 768px) {
    .nav@bar a {
      float: none;
      display: block;
    }`

export const NavLogo = styled(LinkR)`
color: black;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left:24px;
font-weight: bold;
text-decoration: none;

&:hover {
    bottom-margin: 3px #74FF33;
    color: gold;
    background-color: rgba(173, 173, 173, .08);
}
`;

export const MobileIcon = styled.a`
display: none;


@media screen and (max-width: 300px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: right;
list-style: none;
text-decoration: none;

@media screen and (max-width: 768px) {
    display: none; 
    text-align: left;
}`;

export const NavItem = styled.li`
height: 80px;
`;

export const NavLinks = styled.a`
color: black;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;


&:hover {
    bottom-margin: 3px #74FF33;
    color: gold;
    background-color: rgba(173, 173, 173, .08)
}
`;
