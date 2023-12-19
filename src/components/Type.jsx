import React from "react";
import Typewriter from "typewriter-effect";


function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "<span style='font-family: Courier;font-size: 28px'>Html-Css-Sass</span>",
          "<span style='font-family: Courier;font-size: 28px'>Bootstrap-React</span>",
          "<span style='font-family: Courier;font-size: 28px'>Material UI-Axios</span>",
          "<span style='font-family: Courier;font-size: 28px'>Tailwind-StyledComponents</span>",
          "<span style='font-family: Courier;font-size: 28px'>JavaScript-TypeScript-Jquery</span>",
          "<span style='font-family: Courier;font-size: 28px'>Node.js-Express.js</span>",
          "<span style='font-family: Courier;font-size: 28px'>Django-SQL-Sqlite</span>",
          "<span style='font-family: Courier;font-size: 28px'>PostgreSql-MongoDb-MySql</span>",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 0,
       
      }}

    />
  );
}
export default Type;
