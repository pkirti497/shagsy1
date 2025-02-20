import React, { useState } from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faChartBar, faCopy } from '@fortawesome/free-solid-svg-icons';

export default function Services() {

    const servicesData = [
        {
            icon: faLaptopCode,
            number: "01",
            title: "Breaking Barriers Building a Movement",
            shortText: "understand In a world where sexual wellness remains stigmatized, people suffer silently—afraid to.....",
            fullText: "seek help or even  their own needs. We, graduates from NLU Kochi, realized that the real barrier isn’t just the taboo—it’s the fear of exposure.  We aim to break these barriers by building a tech-driven platform rooted in privacy, trust, and accessibility.  We believe everyone deserves access to information and support regarding their sexual health." // Example full text
        },
        {
            icon: faChartBar,
            number: "02",
            title: "Our Mission",
            shortText: "To break these barriers by building a tech driven platform rooted in privacy, trust, and accessibility.The Problem Lack of Trust: Existing.....",
            fullText: "guarantee true anonymity. Taboo & Stigma: Conversations around sexual health remain difficult. We strive to create a safe and anonymous space where individuals can confidently explore and manage their sexual wellbeing." // Example full text
        },
        {
            icon: faCopy,
            number: "03",
            title: "The Solution",
            shortText: "We combine legal and technical expertise to create:A Safe Space: Anonymously connect with verified sex therapists and doctors.....",
            fullText: "First Tools: Track your sexual and menstrual health securely and discreetly.  Comprehensive Resources: Access educational materials and expert advice on various sexual health topics. We are committed to providing a holistic solution for sexual wellness."
        },
    ];

    const [expanded, setExpanded] = useState({});

    const handleReadMore = (index) => {
        setExpanded({ ...expanded, [index]: true });
    };

    const handleReadLess = (index) => {
        setExpanded({ ...expanded, [index]: false });
    };

    return (
        <div id="services">
            <div className="container">
                <div className="title_headling">
                    <h3>Our Story The Minds Behind Shagsy</h3>
                </div>
                <div className="service_wrapper">
                    {servicesData.map((service, index) => (
                        <div className="service_box" key={index}>
                            <div className={`service_icon ${index === 0 ? 'blue_icon' : index === 2 ? 'green_icon' : ''}`}>
                                <FontAwesomeIcon icon={service.icon} />
                            </div>
                            <h4 className="number">{service.number}</h4>
                            <div className="service_content">
                                <h5>{service.title}</h5>
                                <p>
                                    {expanded[index] ? service.fullText : service.shortText}
                                    {!expanded[index] && <span className="read-more" onClick={() => handleReadMore(index)} style={{cursor:"pointer",color:"blue"}}>Read more</span>}
                                    {expanded[index] && <span className="read-less" onClick={() => handleReadLess(index)}  style={{cursor:"pointer",color:"blue"}} >Read less</span>}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}