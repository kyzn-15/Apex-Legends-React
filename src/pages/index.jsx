import Layout from "./Layout";
import "../../src/index.css";
import "../../src/blogs.css";
import '../../src/App.css'; 
import GameplayVideo from "../assets/Apex Gameplay 30s.mp4";
import FlyerImg from '../assets/Apex Legends Wallpaper (1).jpeg';

const AppStyles = {
  root: {
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "rgb(101, 74, 36)",
    overflowX: "hidden",
    scrollBehavior: "smooth"
  },
  navbar: {
    backgroundColor: "black",
    fontFamily: "'Bebas Neue', sans-serif",
    height: "75px"
  },
  navLink: {
    color: "white",
    fontSize: "1.5rem",
    margin: "0 0.5rem"
  },
  over: {
    width: "8rem"
  },
  navbarCollapseShow: {
    backgroundColor: "black"
  },
  navLinkHover: {
    color: "rgb(218, 41, 42)"
  },
  dropdownMenu: {
    backgroundColor: "rgb(218, 41, 42)",
    border: "2px solid black"
  },
  dropdownItem: {
    color: "white",
    fontSize: "1.2rem"
  },
  dropdownItemHover: {
    backgroundColor: "black",
    color: "rgb(218, 41, 42)"
  },
  navbarTogglerIcon: {
    fontSize: "2rem",
    color: "rgb(218, 41, 42)"
  },
  buttonDownload: {
    width: "10vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    backgroundColor: "rgb(218, 41, 42)",
    fontSize: "1.2rem",
    color: "white",
    borderRadius: "0.2rem",
    margin: "0 40vw"
  },
  buttonDownloadHover: {
    backgroundColor: "rgb(166, 31, 32)"
  },
  teks: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textShadow: "10px 0px 10px black"
  },
  teksH1: {
    color: "white",
    fontSize: "10rem",
    fontWeight: 600,
    textAlign: "center"
  },
  teksH2: {
    fontSize: "5rem",
    color: "white",
    fontWeight: 600,
    textAlign: "center"
  },
  bannerVideo: {
    marginTop: "4rem",
    width: "100vw"
  },
  buttonWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem"
  },
  buttonBanner: {
    width: "20vw",
    height: "8vh",
    backgroundColor: "rgb(218, 41, 42)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    color: "white",
    fontSize: "1.8rem",
    textAlign: "center",
    borderRadius: "0.3rem"
  },
  buttonBannerHover: {
    backgroundColor: "black",
    color: "rgb(218, 41, 42)",
    transform: "scale(1.05)",
    transition: "transform 0.2s linear"
  },
  flyer: {
    marginTop: "-0.5rem",
    width: "100vw",
    height: "50vh",
    backgroundColor: "black",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem"
  },
  flyerH1: {
    color: "white",
    fontSize: "4rem",
    textAlign: "center",
    textShadow: "10px 0px 10px black"
  },
  flyerP: {
    color: "white",
    fontSize: "1.5rem",
    textAlign: "center",
    textShadow: "10px 0px 10px black"
  },
  newsOverview: {
    backgroundColor: "rgb(255, 247, 236)",
    paddingTop: "10vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Bebas Neue', sans-serif",
    marginTop: "-0.5rem"
  },
  cardWrap: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem"
  },
  news: {
    flexWrap: "wrap",
    gap: "1rem"
  },
  preview: {
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "30vw",
    color: "white",
    marginBottom: "10vh",
    marginTop: "3vh"
  },
  newsCard: {
    marginBottom: "0.1rem",
    marginTop: "0.1rem"
  },
  gambar: {
    width: "30vw",
    height: "30vh",
    backgroundColor: "gray",
    backgroundImage: "url(../src/assets/news-1.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    marginBottom: "1.5rem"
  },
  date: {
    display: "flex",
    alignItems: "center",
    width: "30vw"
  },
  dateH5: {
    margin: "0 1rem",
    marginBottom: "2rem"
  },
  gameName: {
    color: "rgb(218, 41, 42)"
  },
  previewP: {
    marginBottom: "19vh",
    marginTop: "1rem",
    fontSize: "1.2rem",
    textAlign: "center"
  },
  strip: {
    width: "30vw",
    height: "1vh",
    backgroundColor: "rgb(218, 41, 42)"
  },
  cardAbout: {
    display: "flex",
    backgroundColor: "rgb(30, 29, 29)",
    width: "90vw",
    marginBottom: "1.5rem"
  },
  cardAboutImg: {
    backgroundColor: "red",
    width: "70vw",
    height: "25rem",
    marginRight: "2rem",
    backgroundImage: "url(../src/assets/about.jpeg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  desc: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    width: "90vw"
  },
  descH1: {
    fontSize: "4.5rem"
  },
  descP: {
    fontSize: "1.5rem",
    maxWidth: "40vw",
    textWrap: "wrap",
    textAlign: "justify"
  },
  aboutFoto: {
    marginTop: "2rem",
    width: "45rem",
    height: "45rem",
    backgroundImage: "url(../src/assets/about-legends.png)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  aboutHeading: {
    marginTop: "3rem",
    marginBottom: "2rem",
    fontSize: "3rem"
  },
  aboutText: {
    fontSize: "1.5rem",
    textAlign: "center",
    marginBottom: "3rem"
  },
  genap: {
    flexDirection: "row-reverse",
    margin: 0
  },
  invisibleCard: {
    paddingTop: "2rem",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(255, 247, 236)",
    gap: "1rem",
    paddingBottom: "2rem"
  },
  invCard: {
    maxWidth: "30vw"
  },
  invCardImg: {
    width: "30vw",
    height: "35vh"
  },
  invCardH1: {
    marginTop: "1.5rem",
    marginLeft: "5%"
  },
  invCardP: {
    marginLeft: "5%",
    textAlign: "justify",
    width: "25vw",
    fontSize: "1.2rem"
  },
  newsBanner: {
    width: "100vw",
    backgroundColor: "rgb(254, 0, 0)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "30rem",
    marginTop: "4rem"
  },
  newsBannerH1: {
    marginTop: "-10rem",
    color: "white",
    fontSize: "3rem"
  },
  newsContainer: {
    width: "100vw",
    backgroundColor: "rgb(255, 247, 236)"
  }
};

function Index() {
  return (
    <div style={AppStyles.root}>
      <section style={AppStyles.banner}>
        <video style={AppStyles.bannerVideo} src={GameplayVideo} autoPlay muted loop></video>
        <div style={AppStyles.teks}>
          <h1 style={AppStyles.teksH1}>APEX</h1>
          <h2 style={AppStyles.teksH2}>--LEGENDS--</h2>
          <div style={AppStyles.buttonWrap}>
            <a href="#" style={AppStyles.buttonBanner}>
              Play Free Now
            </a>
            <a href="#" style={AppStyles.buttonBanner}>
              Watch Gameplay Trailer
            </a>
          </div>
        </div>
      </section>
      <section style={AppStyles.flyer}>
        <h1 style={AppStyles.flyerH1}>THE GAMES HAVE A WHOLE NEW ENERGY</h1>
        <p style={AppStyles.flyerP}>
          Drop back into the fight in Apex Legends Shockwave with Revivals,
          updates to make the Outlands legendary for all, and a new neon
          playground.
        </p>
        <a href="#" style={AppStyles.buttonBanner}>
          Tap in
        </a>
      </section>
      <section style={AppStyles.newsOverview}>
        <h1>Latest News</h1>
        <div style={AppStyles.cardWrap}>
          <div style={AppStyles.preview}>
            <div style={AppStyles.gambar}></div>
            <div style={AppStyles.date}>
              <h5 style={AppStyles.gameName}>APEX LEGENDS</h5>
              <h5>AUG 22 2024</h5>
            </div>
            <h2>APEX LEGENDS ANTI-CHEAT</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, animi.</p>
            <div style={AppStyles.strip}></div>
          </div>
          <div style={AppStyles.preview}>
            <div style={AppStyles.gambar}></div>
            <div style={AppStyles.date}>
              <h5 style={AppStyles.gameName}>APEX LEGENDS</h5>
              <h5>AUG 22 2024</h5>
            </div>
            <h2>APEX LEGENDS ANTI-CHEAT</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, animi.</p>
            <div style={AppStyles.strip}></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;
