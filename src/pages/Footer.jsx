import "../../src/index.css";
import "../../src/blogs.css";
import "../../src/App.css";
import React from "react";

const AppStyles = {
  root: {
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "rgb(101, 74, 36)",
    overflowX: "hidden",
    scrollBehavior: "smooth"
  },
  footerWrap: {
    padding: "2rem 0",
    backgroundColor: "black",
    color: "white",
    textAlign: "center"
  },
  footerTop: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "1rem",
    marginBottom: "1rem"
  },
  footerLinkTop: {
    color: "white",
    textDecoration: "none",
    fontSize: "1rem",
    transition: "color 0.3s",
  },
  footerLinkHover: {
    color: "rgb(218, 41, 42)"
  },
  line: {
    width: "100%",
    height: "1px",
    backgroundColor: "rgb(218, 41, 42)",
    margin: "1rem 0"
  },
  footerImgWrap: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem"
  },
  apexLogo: {
    width: "50px",
    height: "50px",
    backgroundImage: "url(../src/assets/apex-logo.png)", // Replace with actual logo path
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat"
  },
  teen: {
    width: "50px",
    height: "50px",
    backgroundImage: "url(../src/assets/teen-logo.png)", // Replace with actual teen logo path
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat"
  }
};

function Footer() {
  return (
    <footer style={AppStyles.footerWrap}>
      <div style={AppStyles.footerTop}>
        <a href="#" style={AppStyles.footerLinkTop}>
          Home
        </a>
        <a href="#" style={AppStyles.footerLinkTop}>
          Apex Legends Global Series
        </a>
        <a href="#" style={AppStyles.footerLinkTop}>
          About
        </a>
        <a href="#" style={AppStyles.footerLinkTop}>
          Legends
        </a>
        <a href="#" style={AppStyles.footerLinkTop}>
          FAQ
        </a>
        <a href="#" style={AppStyles.footerLinkTop}>
          News
        </a>
        <a href="#" style={AppStyles.footerLinkTop}>
          Media
        </a>
        <a href="#" style={AppStyles.footerLinkTop}>
          Forums
        </a>
      </div>

      <div style={AppStyles.line}></div>
      <div style={AppStyles.footerImgWrap}>
        <div style={AppStyles.apexLogo}></div>
        <div style={AppStyles.teen}></div>
      </div>
    </footer>
  );
}

export default Footer;
