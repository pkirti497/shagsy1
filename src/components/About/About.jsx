import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faChartPie,
  faTruckFast,
  faUserClock,
  faHouseLaptop,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import ab from "../../assets/about/ab.jpg";
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

export default function About() {
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
          <div className="title_headling">
            <h3>
              "Sexual Wellness Representation "Shagsy is India’s first platform
              combining sexual wellness tracking, expert teleconsultations, and
              next-gen privacy—all designed for YOU."
            </h3>
          </div>
          <div>
          <h3 style={{display:"flex",justifyContent:"center"}}>What We’re Building</h3>
          </div>
          <div className="about_box_wrapper">
            <div className="about_box">
              <div className="about_icon">
                <FaChartLine size={24} />
              </div>
              <div className="about_content">
                <h5>Tracker</h5>
                <p>
                  Track what matters to YOU—intimacy, menstrual cycles, and
                  sexual health—all completely anonymous and encrypted.
                </p>
              </div>
            </div>
            <div className="about_box">
              <div className="about_icon green_icon">
                <FaUserFriends size={24} />
              </div>
              <div className="about_content">
                <h5>Connect</h5>
                <p>
                  Talk one-on-one with certified sex therapists and doctors in a
                  judgment-free, secure space.
                </p>
              </div>
            </div>
            <div className="about_box">
              <div className="about_icon blue_icon">
                <FaLock size={24} />
              </div>
              <div className="about_content">
                <h5>Privacy</h5>
                <p>
                  Your data is yours—secured with cutting-edge encryption and
                  protected by experts who prioritize your privacy and your
                  happiness.
                </p>
              </div>
            </div>
          </div>

          <div className="about_box_details">
            <div className="about_col">
              <div className="about_image">
                <img src={ab} alt="about" className="about_main"  style={{height:"40rem"}}/>
              </div>
              <div className="img_info__box">
                <h6 className="img_info__title">Be an Early Adopter</h6>
                <p>
                Sexual Wellness Representation "Shagsy is India’s first platform.
                </p>
                <a href="/">
                  {faPhoneIcon} <span>1-000-111-2200</span>
                </a>
              </div>
            </div>
            <div className="about_col more_space">
              <h3>Why Trust Shagsy</h3>
              <p>
                More Than an App—Your Partner in Sexual Wellness, Privacy, and
                Confidence.
              </p>

              <div className="grid_info">
                <div className="icon">
                <FaUserSecret  size={24} />

                </div>
                <div className="detail">
                  <h4>Your Privacy, Our Priority</h4>
                  <p>Advanced encryption ensures your data stays yours.</p>
                </div>
              </div>
              <div className="grid_info">
                <div className="icon green_icon"><FaCheckCircle /></div>
                <div className="detail">
                  <h4>Verified Professionals Only</h4>
                  <p>
                    Only certified therapists and doctors are allowed on our
                    platform.
                  </p>
                </div>
              </div>
              <div className="grid_info">
                <div className="icon">                <FaPeopleGroup size={24} />
                </div>
                <div className="detail">
                  <h4>Community & Care</h4>
                  <p>
                    A judgment-free space, rooted in understanding and
                    empowerment.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
