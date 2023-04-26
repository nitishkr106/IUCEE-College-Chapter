import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoimg from '../images/kle-logo.png';
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
const Box = styled.div`
  padding: 80px 60px;
  background: #BC8F8F;
  position: bottom;
  bottom: 0;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`;
   
const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;
   
const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
   
const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

const Logo = styled(Link)`
    color: #fff;
    display: flex;
    align-items: left;
    margin-bottom: 2rem;
    cursor: pointer;
    img {
        height: 100%;
        width: 100%;
    }
`;

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
}
    return (
      <Box>
        <Container>
          <Row>
          <Column>
                <Logo to ='/' onClick= {toggleHome}><img src = {logoimg} alt="logo"/></Logo>
                <h6 style={{color: '#fff'}}>&copy; 2021 All rights reserved.</h6>
            </Column>
            <Column>
            </Column>
            <Column>
              <Heading>Menu</Heading>
              <FooterLink onClick = {toggleHome}>Home</FooterLink>
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Events</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
            </Column>
            <Column>
              <Heading>Social Media</Heading>
              <FooterLink href="#">
                <i className="fab fa-facebook-f">
                  <span style={{ marginLeft: "10px" }}>
                    <FaFacebook/> Facebook
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: "10px" }}>
                    <FaInstagram/>  Instagram
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-twitter">
                  <span style={{ marginLeft: "10px" }}>
                    <FaTwitter/> Twitter
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-youtube">
                  <span style={{ marginLeft: "10px" }}>
                    <FaYoutube/> YouTube
                  </span>
                </i>
              </FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
    );
  };

export default Footer;
