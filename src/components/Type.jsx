import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
     
      options={{
        strings: [
          "<span style='font-family: Courier;font-size: 28px'>Html-Css-Sass-Bootstrap-React-Material UI-React Bootstarp-Axios-Tailwind-Styled Components-JavaScript-TypeScript-JQuery-Node.js-Express.js-Django-SQL-Sqlite-PostgreSql-MySql-MongoDb</span> ",

          // "<span style='font-family: Courier;font-size: 28px'>React-Material UI-Axios-Tailwind-Styled Components</span> ",
          // "<span style='font-family: Courier;font-size: 28px'>JavaScript-TypeScript-JQuery</span> ",
          // "<span style='font-family: Courier;font-size: 28px'>Node.js-Express.js-Django</span> ",
          // "<span style='font-family: Courier;font-size: 28px'>SQL-Sqlite-PostgreSql-MySql-MongoDb</span> ",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed:0,
         
        
      }}
    />
  );
}
export default Type;
