import React from "react";

const About = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full">
      <div className="flex items-center justify-center mt-5">
        <img
          className="rounded-full border-2 border-zinc-600 shadow-lg w-48 h-48"
          src="./images/tt.jpg" // Profil fotoğrafınızın URL'sini ekleyin
          alt="Profil"
        />
      </div>
      <div className="mt-3 d-flex justify-content-center">
        <div className="col-sm-12 col-md-8 col-lg-6 col-xl-6">
          <div className="text-left">
            <p  style={{ textIndent: '40px'}}>
              "Hello, I'm Akif. I'm a passionate full stack developer focusing
              on both front-end and back-end domains. Working in the realm of
              software and coding isn't just a job for me; it's a passion and an
              area of keen interest. Keeping abreast of technological
              advancements and continually enhancing my skills is essential to
              me."
            </p>
          </div>
          <div className="text-left">
            <p style={{ textIndent: '40px'}}>
              "If you want to delve deeper into the programming languages,
              frameworks, libraries, and packages I use in my projects, feel
              free to explore my 'Projects' page. While discovering my work and
              projects, you'll get a closer look at my passion and dedication in
              the realm of software development."
            </p>
          </div>
        </div>
      </div>

      <div className="flex  justify-evenly mt-3">
        <div>
          <button className="button1">
            <span>MY CV</span>
            <div class="top"></div>
            <div class="left"></div>
            <div class="bottom"></div>
            <div class="right"></div>
          </button>
        </div>
        <div>
          <button className="button1">
            <span>CERTİFİCATES</span>
            <div class="top"></div>
            <div class="left"></div>
            <div class="bottom"></div>
            <div class="right"></div>
          </button>
        </div>
      </div>
      <p className="text-center text-sm font-black underline  ">
        achieve-software &copy; {currentYear}
      </p>
    </div>
  );
};

export default About;
