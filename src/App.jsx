import React, { useState } from 'react';
import './App.css';

function App() {

    const [message, setMessage] = useState("Welcome to AdFriend");

    const handleReplaceAds = () => {
        // Send a message to the content script to replace ads
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: "replaceAds" });
        });
    };

    return (
          <div className="popup-container">
            <h1>AdFreind</h1>
            <button onClick={handleReplaceAds}>Replace Ads</button>
                <h2>Adfriend</h2>
                <p>{message}</p>
                <button onClick={()=>setMessage("you are amazing! keep going get inspired")}></button>
        </div>
    );
}

export default App;