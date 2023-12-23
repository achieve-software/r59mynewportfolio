import React, { useState } from "react";
import { Link } from "react-router-dom";
import PROJECTS from "./../data";
import Form from "react-bootstrap/Form";
import { IoLogoGithub } from "react-icons/io5";
import { FaInternetExplorer } from "react-icons/fa6";

import { MdOutlineLiveTv } from "react-icons/md";

const Projects = () => {
  const [search, setSearch] = useState("");
  return (
    <main className="w-full">
      <div className=" pg-header">
        <h1>My Projects</h1>
      </div>

      <Form.Control
        placeholder="Search a project..."
        type="search"
        className="w-50 m-auto mt-4 "
        style={{
          borderTop: "none",
          borderRight: "none",
          borderBottom: "3px solid #FF4B45",
          borderLeft: "none",
        }}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="container content">
        <div className="row products-row">
          {PROJECTS.filter((projects) =>
            projects.name.toLowerCase().includes(search.trim().toLowerCase())
          ).map((projects) => {
            return (
              <div className="col-lg-4" key={projects.id}>
                <div className="card">
                  <div className="img-wrap hover:scale-110 transition-transform duration-300" type="button">
                    <img
                      src={projects.image}
                      alt=""
                      onClick={() => window.open(projects.liveurl, "_blank")}
                      
                    />
                  </div>
                  <div className="card-body ">
                    
                    <h5 className="card-title">{projects.name}</h5>

                    <p className="card-text">{projects.details}</p>

                    <div className="d-flex justify-content-between align-items-center">
                      <IoLogoGithub
                        size={44}
                        style={{
                          color: "#eaf03f",
                          cursor: "pointer",
                          transition: "transform 0.3s ease-in-out",
                        }}
                        className="mr-5"
                        onClick={() => window.open(projects.giturl, "_blank")}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.2)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      />

                      <FaInternetExplorer
                        size={36}
                        style={{
                          color: "#77E8F7",
                          cursor: "pointer",
                          transition: "transform 0.3s ease-in-out",
                        }}
                        onClick={() => window.open(projects.liveurl, "_blank")}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.2)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Projects;
