import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
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

