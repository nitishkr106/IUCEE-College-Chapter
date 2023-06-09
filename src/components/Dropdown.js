import { Button } from './Button';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';


const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #cd853f;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

const Icon = styled.div`
    position: absolute;
    top: 0rem;
    right: 1.5rem;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    color: #000d1a;
`;

const CLoseIcon =styled(FaTimes)`
    color: #000d1a;
    
`;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screeen and (max-width: 480px) {
        grid-template-rows: repeat(4, 60px);
    }
`;

const DropdownLink = styled(Link)`
    display= flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        color: #000d1a;
    }
`;

const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

const Dropdown = ({isOpen, toggle}) => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <DropdownContainer isOpen={isOpen} onClick = {toggle} >
            <Icon onClick = {toggle} >
                <CLoseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                        <DropdownLink to = {toggleHome}>
                            Home
                        </DropdownLink>
                        <DropdownLink to = {toggleHome}>
                            About Us
                        </DropdownLink>
                        <DropdownLink to = {toggleHome}>
                            Events
                        </DropdownLink>
                        <DropdownLink to = {toggleHome}>
                            IUCEE
                        </DropdownLink>
                </DropdownMenu>
                <BtnWrap>
                    <Button primary = "true" round = "true" big = "true" to='/contact'>
                        Contact Us
                    </Button>
                </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown;