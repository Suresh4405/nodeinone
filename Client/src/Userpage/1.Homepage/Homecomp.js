import React, { useState, useEffect } from 'react';
import "./homecomp.css";
import { useNavigate } from 'react-router-dom';

const Homecomp = () => {
    const navigate = useNavigate();
    
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const typingSpeed = 100; // Speed in milliseconds for typing and deleting
    const pauseDuration = 1000; // Pause duration after typing or deleting

    const words1 = "Custom Software";
    const words2 = "Development";
    const words3 = "Services.";
    const textLength1 = words1.length;
    const textLength2 = words2.length;
    const textLength3 = words3.length;

    const handleNavigation = (route) => {
        navigate(route);
      };
    
    useEffect(() => {
        let timer;
        const handleTyping = () => {
            if (isTyping) {
                // Typing animation
                if (text1.length < textLength1) {
                    setText1((prevText) => words1.slice(0, prevText.length + 1));
                } else if (text2.length < textLength2) {
                    setText2((prevText) => words2.slice(0, prevText.length + 1));
                } else if (text3.length < textLength3) {
                    setText3((prevText) => words3.slice(0, prevText.length + 1));
                } else {
                    // Pause after typing complete
                    setIsTyping(false);
                    timer = setTimeout(() => {
                        setIsTyping(false);
                    }, pauseDuration);
                }
            } else {
                // Deleting animation
                if (text3.length > 0) {
                    setText3((prevText) => prevText.slice(0, -1));
                } else if (text2.length > 0) {
                    setText2((prevText) => prevText.slice(0, -1));
                } else if (text1.length > 0) {
                    setText1((prevText) => prevText.slice(0, -1));
                } else {
                    // Pause after deleting complete
                    setIsTyping(true);
                }
            }
        };

        timer = setTimeout(handleTyping, typingSpeed);

        return () => {
            clearTimeout(timer);
        };
    }, [text1, text2, text3, isTyping, typingSpeed, pauseDuration, textLength1, textLength2, textLength3]);

    return (
        <div className="two-column-container">
            <div className="left-column">
                <div className='Left-aside'>
                <h3 className='Sculpt'>- Sculpt Your Thoughts To Reality!</h3>
                <p className='Animated-devops1'>{text1}</p>
                <p className='Animated-devops2'>{text2}</p>
                <p className='Animated-devops3'>{text3}</p>
                <p className='Passage-texted'>We enable prograssive bussiness to transform, scale and gain <br></br> competitive advantage,through the expert delivery of inovative, <br></br>tailor-made Software. </p>
                </div>
            </div>
            <div className='Right-aside'>
            <button className='Button-getstart' onClick={() => handleNavigation('/contact')}>GET STARTED WITH NINJASCRIBE</button>
                </div>
        </div>
    );
}

export default Homecomp;
