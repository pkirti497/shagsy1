import React from "react";
import "./Home.css";
import BannerImage from "../../assets/banner/banner-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bannerweb from "../../assets/banner/bannerweb.png";
import {
  faChartLine,
  faShieldHalved,
  faChartArea,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Home() {
  // Icons
  const faChartIcon = <FontAwesomeIcon icon={faUsers} />;
  const faShieldIcon = <FontAwesomeIcon icon={faShieldHalved} />;
  const faChartAreaIcon = <FontAwesomeIcon icon={faChartArea} />;
  const [hovered, setHovered] = useState(null);

  const buttonStyle = (isHovered, defaultBg) => ({
    borderRadius: "6px",
    transition: "transform 0.3s ease-in-out",
    padding: "10px 20px",
    display: "inline-block",
    textDecoration: "none",
    backgroundColor: isHovered ? "#6c757d" : defaultBg, // Change on hover
    color: "#fff",
    fontWeight: "bold",
    transform: isHovered ? "scale(1.15)" : "scale(1)", // Scale effect on hover
    border: "none",
    cursor: "pointer",
  });
  return (
    <>
      <section id="home">
        <div className="banner_image"></div>
        <div className="container" style={{ marginTop: "6.7rem" }}>
          <div className="banner_outer">
            <div className="col">
              <h3
                className="title"
                style={{ position: "relative", zIndex: 99 }}
              >
                Redefine Sexual Wellness—Privately{" "}
                <span>Securely Confident</span>
              </h3>

              <p>
                Your Health. Your Journey. Your Privacy—All in One Platform.
              </p>
              <div className="main-wrp">
      <div className="btn_wrapper">
        <a
          href="/"
          className="btn"
          style={buttonStyle(hovered === "signup", "#990033")}
          onMouseEnter={() => setHovered("signup")}
          onMouseLeave={() => setHovered(null)}
        >
          Sign-Up Now
        </a>
      </div>
      <div className="btn_wrapper">
        <a
          href="/"
          className="btn"
          style={buttonStyle(hovered === "partner", "#990033")}
          onMouseEnter={() => setHovered("partner")}
          onMouseLeave={() => setHovered(null)}
        >
          Partner in Wellness
        </a>
      </div>
    </div>
            </div>
            <div className="col">
              <div className="sub_banner_image">
                <img src={bannerweb} alt="Banner_image" />
              </div>
              <div className="banner_style_1">
                {faChartIcon}
                <h4>Sexual Wellness</h4>
              </div>
              <div className="banner_style_1 banner_style_2">
                {faShieldIcon}
                <h4>99.9% Success</h4>
              </div>
              <div className="banner_style_1 banner_style_3">
                {faChartAreaIcon}
                <h4>Shagsy</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
