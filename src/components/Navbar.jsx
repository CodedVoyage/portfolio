import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './css/Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
    const [visible, setVisible] = useState(true);
    const menuRef = useRef(null);
    const prevScrollY = useRef(0);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth < 769);
        if (window.innerWidth >= 769) {
            setIsMenuOpen(false);
        }
    };

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setVisible(prevScrollY.current > currentScrollY || currentScrollY < 20);
        prevScrollY.current = currentScrollY;
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${visible ? 'visible' : 'hidden'}`}>
            {isMobile ? (
                <>
                    <div className="hamburger" onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes size={24} color="white" /> : <FaBars size={24} color="white" />}
                    </div>
                    {isMenuOpen && (
                        <ul className="nav-links" ref={menuRef}>
                            <li><Link to="about" smooth={true} duration={500} onClick={toggleMenu}>About</Link></li>
                            <li><Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>Skills</Link></li>
                            <li><Link to="certifications" smooth={true} duration={500} onClick={toggleMenu}>Certifications</Link></li>
                            <li><Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>Projects</Link></li>
                            <li><Link to="education" smooth={true} duration={500} onClick={toggleMenu}>Education</Link></li>
                        </ul>
                    )}
                </>
            ) : (
                <ul className="nav-links">
                    <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                    <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                    <li><Link to="certifications" smooth={true} duration={500}>Certifications</Link></li>
                    <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                    <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
                </ul>
            )}
            <a href="https://github.com/CodedVoyage" target="_blank" rel="noopener noreferrer">
                <button className="outline-button">Github Profile</button>
            </a>
        </nav>
    );
};

export default Navbar;
