import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoWhite from "../../assets/svg/Logo_White";
import Logoimg from "../../assets/svg/Logo"

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <LogoWhite />
              
            </Link>
            {/* <StyleP className="whiteColor font13">
              © {getCurrentYear()} - <span className="purpleColor font13">Property Maintenance Liverpool</span> All Right Reserved
            </StyleP> */}
            <StyleP className="whiteColor font13">
             <h6 className="whiteColor font13">Property Maintenance Liverpool is 
             trading name for <br/> SWIFT UK PROPERTY INVESTMENTS LTD. <br/>
             Company number: 15244665
             
             </h6> 
            </StyleP>
            <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
              Back to top
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;