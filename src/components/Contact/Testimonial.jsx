import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faChartPie,
  faTruckFast,
  faUserClock,
  faHouseLaptop,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import about from "../../assets/about/about.jpg";
import {
  FaChartLine,
  FaUserFriends,
  FaLock,
  FaUserMd,
  FaShieldAlt,
  FaCheckCircle,
  FaUserSecret,
} from "react-icons/fa"; // Added doctor and shield icons
import { FaPeopleGroup } from "react-icons/fa6";
import { BiStar } from "react-icons/bi";

export default function Testimonial() {
  // Icons
  const faBusinessIcon = <FontAwesomeIcon icon={faBusinessTime} />;
  const faChartPieIcon = <FontAwesomeIcon icon={faChartPie} />;
  const faTruckFastIcon = <FontAwesomeIcon icon={faTruckFast} />;
  //   const faUserClockIcon = <FontAwesomeIcon icon={faUserClock} />;
  const faHouseLaptopIcon = <FontAwesomeIcon icon={faHouseLaptop} />;
  const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />;

  return (
    <>
      <section id="about">
        <div class="container">
          <div className="title_headling"></div>
          <div></div>
          <div className="about_box_wrapper">
            <div className="about_box service_box">
              <div className="about_icon">
                <img
                  src="https://wallpapers.com/images/hd/south-hero-portrait-shot-csf16krd3gvn9hv8.jpg"
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50px",
                  }}
                />
              </div>
              <div className="about_content">
                <h5>Adarsh</h5>
                <span style={{ color: "gold" }}>
                  <BiStar size={25} /> <BiStar size={25} /> <BiStar size={25} />{" "}
                  <BiStar size={25} /> <BiStar size={25} />
                </span>
                <p className="p-text">
                  "Privacy Advocate & Wellness Visionary. Highly recommend
                  Shagsy for boosting confidence and tracking goals!"
                </p>
              </div>
            </div>
            <div className="about_box service_box">
              <div className="about_icon green_icon">
                <div className="about_icon">
                  <img
                    src="https://wallpapers.com/images/hd/south-hero-portrait-shot-csf16krd3gvn9hv8.jpg"
                    style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "50px",
                    }}
                  />
                </div>{" "}
              </div>
              <div className="about_content">
                <h5>Rahul</h5>
                <span style={{ color: "gold" }}>
                  <BiStar size={25} /> <BiStar size={25} /> <BiStar size={25} />{" "}
                  <BiStar size={25} /> <BiStar size={25} />
                </span>
                <p className="p-text">
                  "Tech-Driven Innovator. Shagsy has been a game changer for
                  staying organized and achieving goals!"
                </p>
              </div>
            </div>
            <div className="about_box service_box">
              <div className="about_icon blue_icon">
                <div className="about_icon">
                  <img
                    src="https://wallpapers.com/images/hd/south-hero-portrait-shot-csf16krd3gvn9hv8.jpg"
                    style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "50px",
                    }}
                  />
                </div>{" "}
              </div>
              <div className="about_content">
                <h5>Empowering</h5>
                <span style={{ color: "gold" }}>
                  <BiStar size={25} /> <BiStar size={25} /> <BiStar size={25} />{" "}
                  <BiStar size={25} /> <BiStar size={25} />
                </span>
                <p className="p-text">
                  "Tech-Driven Innovator. Shagsy has been a game changer for
                  staying organized and achieving goals!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
