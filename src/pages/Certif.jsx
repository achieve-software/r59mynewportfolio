import React, { useState } from "react";
import "./Certif.css";

const Certif = () => {
  const [activePanel, setActivePanel] = useState(null);

  const handlePanelClick = (panelId) => {
    setActivePanel(panelId);
  };

  return (
    <div className="containeree mt-32">
      <div
        className={`   panel ${activePanel === 1 ? "activee" : ""}`}
        style={{
          backgroundImage: `url('./images/FRONTEND.png')`,
        }}
        onClick={() => handlePanelClick(1)}
      ></div>

      <div
        className={`panel ${activePanel === 2 ? "activee" : ""}`}
        style={{
          backgroundImage: `url('./images/HTMLCSS.png')`,
        }}
        onClick={() => handlePanelClick(2)}
      ></div>

      <div
        className={`panel ${activePanel === 3 ? "activee" : ""}`}
        style={{
          backgroundImage: `url('./images/JAVASCRİPT.png')`,
        }}
        onClick={() => handlePanelClick(3)}
      ></div>
      <div
        className={`panel ${activePanel === 4 ? "activee" : ""}`}
        style={{
          backgroundImage: `url('./images/REACT.png')`,
        }}
        onClick={() => handlePanelClick(4)}
      ></div>
    </div>
  );
};

export default Certif;
