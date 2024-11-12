import React, { useState } from 'react';
import './App.css';

function Section({ title, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="Section">
      <h2 onClick={handleToggle}>
        {title} 
        <span className={`arrow ${isExpanded ? 'down' : 'right'}`}>
          ▶
        </span>
      </h2>
      {isExpanded && <div className="Section-content">{children}</div>}
    </div>
  );
}

function App() {
  const [showContent, setShowContent] = useState(false);

  const handleClick = () => {
    setShowContent(true);
    setTimeout(() => {
      document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
    }, 30); // Adjust the timeout to match the fade-in duration
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-headline">Sample Headline</h1>
        <button className="App-button" onClick={handleClick}>
          Show Content
        </button>
      </header>
      <div
        id="content"
        className={`App-content ${showContent ? 'fade-in' : 'hidden'}`}
      >
        <Section title="Section 1">
          <ul>
            <li>Item 1.1</li>
            <li>Item 1.2</li>
            <li>Item 1.3</li>
          </ul>
        </Section>
        <Section title="Section 2">
          <ul>
            <li>Item 2.1</li>
            <li>Item 2.2</li>
            <li>Item 2.3</li>
          </ul>
        </Section>
        <Section title="Section 3">
          <ul>
            <li>Item 3.1</li>
            <li>Item 3.2</li>
            <li>Item 3.3</li>
          </ul>
        </Section>
      </div>
    </div>
  );
}

export default App;