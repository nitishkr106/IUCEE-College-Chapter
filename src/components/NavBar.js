import React, {useState, useEffect} from 'react';
import styled, { css } from 'styled-components/macro'; 
import { Link } from 'react-router-dom';
import { Button } from './Button';
import {FaBars} from 'react-icons/fa';
import logoimg from '../images/kle-logo.png';
import { animateScroll as scroll } from 'react-scroll';

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background: ${({scrollNav}) => (scrollNav ? '#BC8F8F' : 'transparent')};
    
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    top: 2;

    &.active {
        border-bottom: 3px solid #006400;
    }
`;

const Logo = styled(Link)`
    ${NavLink}
    img {
        height: 200%;
        width: 200%;
    }
`;

const MenuBars = styled(FaBars)`
    display:none;   

    @media screen and (max-width: 768px){
        display: block;
        color: #fff;
        height: 40px;
        width: 40px;
        cursor: pointer;
        position: relative;
        top: 0;
        right: 0;
        transform translate(-50%, 25%);
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
${NavLink}
`;

const NavBtn = styled.div`
    display: flex;
    align-item: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;


const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <Nav scrollNav={scrollNav}>
            <Logo to ='/' onClick = {toggleHome}><img src = {logoimg} alt="logo"/></Logo>
            <MenuBars onClick = {toggle} />
            <NavMenu>
                    <NavMenuLinks to = '/'smooth = {true}
                    duration = {500}
                    spy = {true}
                    exact='true'
                    offset={-80}
                    >
                    Home
                    </NavMenuLinks>
                    <NavMenuLinks to ={toggleHome} smooth = {true}
                    duration = {500}
                    spy = {true}
                    exact='true'
                    offset={-80}
                    >
                    About Us
                    </NavMenuLinks>
                    <NavMenuLinks to ={toggleHome} smooth = {true}
                    duration = {500}
                    spy = {true}
                    exact='true'
                    offset={-80}
                    >
                    Events
                    </NavMenuLinks>
                    <NavMenuLinks to ='/https://iucee.org' smooth = {true}
                    duration = {500}
                    spy = {true}
                    exact='true'
                    offset={-80}
                    >
                    IUCEE
                    </NavMenuLinks>
            </NavMenu>
            <NavBtn>
                <Button to = '/Contact' primary = 'true'>Contact us</Button>
            </NavBtn>

        </Nav>
      
    );
};

export default Navbar;
