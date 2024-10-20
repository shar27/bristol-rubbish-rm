import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Reviews from "../components/Sections/Reviews";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import WhatsApp from '../assets/img/whatsapp-business-icon.jpeg';

export default function Landing() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <TopNavbar />
      <Header />
      <FloatWrapper>
        <a href="https://wa.me/447907772626" style={{ marginRight: '10px' }}>
          <Img src={WhatsApp} width="50px" />
        </a>
        {showArrow && (
          <button
            onClick={scrollToTop}
            style={{
              width: '50px',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        )}
      </FloatWrapper>
      <Reviews />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

const Img = styled.img`
  @media (max-width: 560px) {
    width: 100%;
    height: auto;
  }
`;

const FloatWrapper = styled.div`
  display: flex; /* Use flexbox for alignment */
  align-items: center; /* Center vertically */
  position: fixed; /* Keep it fixed on the screen */
  bottom: 20px; /* Position it near the bottom */
  right: 20px; /* Position it near the right edge */
  z-index: 1000; /* Make sure it stays on top */
`;
