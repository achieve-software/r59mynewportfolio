import React, { useState } from 'react';
import './Certif.css';

const Certif = () => {
  const [activePanel, setActivePanel] = useState(null);

  const handlePanelClick = (panelId) => {
    setActivePanel(panelId);
  };

  return (
    <div className="containeree">
      {/* 1.photo */}
      <div
        className={`panel ${activePanel === 1 ? 'activee' : ''}`}
        style={{
          backgroundImage:
     
          `url('./images/FRONTEND.png')`
        }}
        onClick={() => handlePanelClick(1)}
      >
        <h3>FRONT-END DEVELOPER</h3>
      </div>
      {/* Diğer fotoğraflar için aynı yapıyı tekrarlayın */}
      <div
        className={`panel ${activePanel === 2 ? 'activee' : ''}`}
        style={{
            backgroundImage:
            `url('./images/HTMLCSS.png')`
        }}
        onClick={() => handlePanelClick(2)}
      >
        <h3>HTML/CSS</h3>
      </div>
       {/* 3.photo */}
  <div
     className={`panel ${activePanel === 3 ? 'activee' : ''}`}
    style={{
      backgroundImage:
      `url('./images/JAVASCRİPT.png')`
    }}
    onClick={() => handlePanelClick(3)}
  >
    <h3>JAVASCRİPT</h3>
  </div>
  <div
     className={`panel ${activePanel === 4 ? 'activee' : ''}`}
    style={{
      backgroundImage:
      `url('./images/REACT.png')`
    }}
    onClick={() => handlePanelClick(4)}
  >
    <h3>REACT</h3>
  </div>
      {/* Diğer fotoğraflar... */}
    </div>
  );
};

export default Certif;
