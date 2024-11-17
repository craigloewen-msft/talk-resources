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
        <h3 className="App-headline"><a href="https://ignite.microsoft.com/sessions/BRK306?source=sessions">BRK 306</a> Enhance IT Pro and Developer productivity with new improvements to advanced tools on Windows - Resources</h3>
        <button className="App-button" onClick={handleClick}>Learn more links</button>
      </header>
      <div
        id="content"
        className={`App-content ${showContent ? 'fade-in' : 'hidden'}`}
      >
        <Section title="Windows developer focused features">
          <ul>
            <li><a href="https://learn.microsoft.com/windows/dev-drive/">Dev Drive</a></li>
            <li><a href="https://learn.microsoft.com/windows/sudo/">Sudo</a></li>
            <li><a href="https://learn.microsoft.com/windows-app/overview">Windows App</a></li>
          </ul>
        </Section>
        <Section title="PowerToys">
          <ul>
            <li><a href="https://github.com/microsoft/powertoys">GitHub repository</a></li>
            <li><a href="https://learn.microsoft.com/windows/powertoys/">Docs</a></li>
          </ul>
        </Section>
        <Section title="WSL & Terminal">
          <ul>
            <li><a href="https://aka.ms/cliblog">Command line blog</a></li>
            <li><a href="https://github.com/microsoft/WSL">WSL GitHub repository</a></li>
            <li><a href="https://learn.microsoft.com/windows/wsl/">WSL Docs</a></li>
            <li><a href="https://github.com/microsoft/terminal">Terminal GitHub repository</a></li>
            <li><a href="https://aka.ms/terminal-docs">Terminal Docs</a></li>
          </ul>
        </Section>
        <Section title="WinGet">
          <ul>
            <li><a href="https://github.com/microsoft/winget-pkgs">WinGet package GitHub repository</a></li>
            <li><a href="https://github.com/microsoft/winget-cli">WinGet CLI GitHub repository</a></li>
            <li><a href="https://learn.microsoft.com/windows/package-manager/">WinGet docs</a></li>
            <li><a href="https://learn.microsoft.com/windows/package-manager/configuration/">WinGet configuration docs</a></li>
          </ul>
        </Section>
      </div>
    </div>
  );
}

export default App;