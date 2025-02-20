import React from 'react';
import './Home.css';
import BannerImage from '../../assets/banner/banner-img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faShieldHalved, faChartArea, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

export default function Home() {

    // Icons
    const faChartIcon = <FontAwesomeIcon icon={faUsers} />
    const faShieldIcon = <FontAwesomeIcon icon={faShieldHalved} />
    const faChartAreaIcon = <FontAwesomeIcon icon={faChartArea} />

  return (
    <>
    <section id="home">
        <div className="banner_image"></div>
        <div className="container">
            <div className="banner_outer">
                <div className="col">
                    <h3 className="title">
                    Redefine Sexual Wellness—Privately <span>Securely Confident</span>
                    </h3>
                    <p>Your Health. Your Journey. Your Privacy—All in One Platform.</p>
                    <div className='main-wrp'>
                    <div className="btn_wrapper">
                        <a className="btn" href="/">Sign-Up Now</a>
                    </div>
                    <div className="btn_wrapper">
                        <a className="btn" href="/">Partner in Wellness</a>
                    </div>
                    </div>
                   
                </div>
                <div className="col">
                    <div className="sub_banner_image">
                        <img src="https://www.careinsurance.com/upload_master/media/posts/April2021/wellness.jpg" alt="Banner_image" />
                    </div>
                    <div className="banner_style_1">
                        {faChartIcon}
                        <h4>Medical Wellness</h4>
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
  )
}
