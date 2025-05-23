import React, { useEffect, useState } from 'react';

function TextBox({ text }) {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let i = 0;
        let textSoFar = '';
        setDisplayText('');

        const interval = setInterval(() => {
            if (i >= text.length) {
                clearInterval(interval);
                return;
            }
            
            textSoFar += text[i];
            setDisplayText(textSoFar);
            i++;
        }, 20);

        return () => clearInterval(interval);
    }, [text]);

    return (
        <div className="text-box" id="text-box-nav">
        <div className="text-area" id="text-area-nav">
            <div className="text-nav-box">
            <span className="text-nav vt323-text">{displayText}</span>
            <div className="choice-button" id="choice-button-row">
                <button className="option-button vt323-button-secondary">Skip All</button>
                <button className="option-button vt323-button-secondary">Open Map</button>
                <button className="option-button vt323-button-secondary">Tell me more</button>
                <button className="option-button vt323-button-secondary">{">>"}</button>
            </div>
            </div>
        </div>
        </div>
    );
}

export default TextBox;