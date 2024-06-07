import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";

// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";

//icons
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import ConstructionIcon from '@mui/icons-material/Construction';
import FormatPaintOutlinedIcon from '@mui/icons-material/FormatPaintOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';

export default function Services() {
  return (
    <Wrapper id="services">
      
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Awesome Services</h1>
            <p className="font13">
            Explore our top-notch property maintenance services in Bristol for residential 
            and commercial properties, ensuring your spaces stay in prime condition with our expert solutions.
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
          <ServiceBoxWrapper>
              <HouseIcon>
              <HouseOutlinedIcon
                sx={{
                  width:100,
                  height:100,
                }}
                />
              </HouseIcon>

              <h4>Find a Tenant Services <br/>
              Sell your home/Land
              </h4>
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <VanIcon>
              <LocalShippingIcon
              sx={{
                width: 100,
                height:100,
                
              }}
              />  
              </VanIcon>
             <h4>House Clearance <br/> & Removals</h4>
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <CleaningIcon
              
              >
              <CleaningServicesOutlinedIcon
              sx={{
                width: 100,
                height: 100,
              }}
              
              />
                </CleaningIcon>
                <h4>End of tenancy <br/> & Deep cleaning</h4>
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <HandyManIcon>
                <ConstructionIcon
                sx={{
                  width:100,
                  height:100,
                }}
                />
              </HandyManIcon>
              <h4>Handy man repairs</h4>
            </ServiceBoxWrapper>
            
            <ServiceBoxWrapper>
              <PaintIcon>
                <FormatPaintOutlinedIcon
                sx={{
                  width:100,
                  height:100,
                }}
                />
              </PaintIcon>
              <h4>Painting <br/> & re-decorating</h4>
            </ServiceBoxWrapper>
            
          
          </ServiceBoxRow>
         <h4>We offer a wide range of other services - get in contact today to see how we can help</h4>
         <BtnWrapper>
            
            <a href="#contactForm">
            <FullButton title="Contact us" 
            
            />
            </a>
          </BtnWrapper>
        </div>
        
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;

const HouseIcon = styled.div`
color:black;

`
const VanIcon = styled.div`
color:black;

`
const CleaningIcon = styled.div`
color: black;

`

const HandyManIcon = styled.div`
color:black;

`

const PaintIcon = styled.div`
color:black;

`



const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;