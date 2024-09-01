import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);


  return (
    <>
    <ContactInfoSmallScreen>
        <a href="mailto:hello@bristolpropertymaintenance.co.uk">📧 hello@bristolpropertymaintenance.co.uk</a>
        <a href="tel:03333606113">📞 0333 360 6113</a>
      </ContactInfoSmallScreen>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px" } : { height: "100px" }}>
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <LogoIcon />
            {/* <h2>
              Property Maintenance<br/> Bristol & Bath
            </h2> */}
          </Link>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="home" spy={true} smooth={true} offset={-80}>
                Home
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="services" spy={true} smooth={true} offset={-80}>
                Services
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="projects" spy={true} smooth={true} offset={-80}>
                Locations
              </Link>
            </li>
           
          
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="contact" spy={true} smooth={true} offset={-80}>
                Contact
              </Link>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer">
            <a href="mailto:hello@propertymaintenancebristol.co.uk" style={{ padding: "10px 30px 10px 0" }}>📧 hello@bristolpropertymaintenance.co.uk</a> <br/>
              <a href="/" style={{ padding: "10px 30px 10px 0" }}>
              
                Call today 
                📞 0333 360 6113
              </a>
            </li>
           
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const ContactInfoSmallScreen = styled.div`
  display: none;
  background-color: #003366; /* Dark blue background */
  color: white; /* White text */
  text-align: center;
  padding: 10px 0;
  font-weight:700;
  a {
    color: white;
    display: block;
    padding: 5px 0;
  }
  @media (max-width: 760px) {
  position:fixed;
  width:100%;
    display: block;
    z-index:999;
  }
`;


const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0;
  z-index: 999;
  transition: height 0.3s ease-in-out, top 0.3s ease-in-out;


    @media (max-width: 760px) {
    display: block;
    width: 100%;
   
  position: fixed;
  top: 80px;
  left: 0;
  z-index: 999;
  transition: height 0.3s ease-in-out, top 0.3s ease-in-out;
  }
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
 

@media (max-width: 760px) {
    display: none;
  }
`;


