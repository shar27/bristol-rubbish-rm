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
             <h6 className="whiteColor font13">Bristol Rubbish Removal is a
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
      <BottomFooter>
    
      <div className="contact-info"><h4>📧 hello@bristolrubbishremoval.co.uk</h4></div>
              <div><h4>📞 0333 360 6113</h4></div>
        
    
      </BottomFooter>
    </Wrapper>
    
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const BottomFooter = styled.div`
display:flex;
justify-content: space-between;
color:black;
font-weight:semi-bold;
padding: 1.5rem;


@media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
  }

`
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