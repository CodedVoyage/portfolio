import React, { useState, useEffect } from 'react';
import { aboutData } from './Data/Data';
import TypewriterComponent from './TypewriterComponent';
import profilePicture from '../assets/profile-picture.webp';
import './css/About.css';

const About = () => {
    const [showGreeting, setShowGreeting] = useState(true);
    const [showFullIntro, setShowFullIntro] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const words = aboutData.introduction.split(' ');

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good morning";
        if (hour < 18) return "Good afternoon";
        return "Good evening";
    };

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setShowGreeting(false);
            setShowFullIntro(true);
        }, 3000);

        return () => clearTimeout(timer1);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 500); // Change word every 500 milliseconds

        return () => clearInterval(interval);
    }, [words.length]);

    const handleButtonClick = () => {
        window.open('https://www.google.com', '_blank');
    };

    // Function to generate a gradient color
    const getGradientColor = (index) => {
        const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFDA33'];
        return colors[index % colors.length];
    };

    return (
        <div className="about-container">
            <div className="profile-picture-container">
                <img src={profilePicture} alt="Profile" className="profile-picture" />
            </div>
            <div className="about-text">
                {showGreeting && (
                    <h2 className="intro-name">
                        {getGreeting()}! 😊
                    </h2>
                )}
                {showFullIntro && (
                    <>
                        <h2 className="intro-name">Hi, I am</h2>
                        <h2 className="intro-name">{aboutData.name}</h2>
                        <div className="typewriter-wrapper">
                            <span className="intro-text">I am a</span>
                            <span className="spacing"></span>
                            <span className="typewriter-text">
                                <TypewriterComponent />
                            </span>
                        </div>
                        <p className="about-introduction">
                            {words.map((word, index) => (
                                <span
                                    key={index}
                                    className={`word ${index === activeIndex ? 'active' : ''}`}
                                    style={{
                                        color: index === activeIndex ? getGradientColor(activeIndex + index) : '#f2f2f2',
                                        transition: 'color 0.3s'
                                    }}
                                >
                                    {word}{' '}
                                </span>
                            ))}
                        </p>
                    </>
                )}
                <div className="button-container">
                    <button className="primary-button" onClick={handleButtonClick}>
                        Check Resume
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
