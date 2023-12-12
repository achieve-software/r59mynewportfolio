import React from 'react'
import "./Candle.scss";

const Candle = () => {
    return (

        <div className="holder">
          <div className="candle">
            <div className="blinking-glow" />
            <div className="thread" />
            <div className="glow" />
            <div className="flame" />
          </div>
        </div>
      );
}

export default Candle