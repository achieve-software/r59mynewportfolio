import React, { useState } from "react";
import {Link} from "react-router-dom";
import PROJECTS from "./../data";
import Form from "react-bootstrap/Form";

const Projects = () => {
  const [search, setSearch] = useState("");
  return (
    <main> 
      <div className="pg-header">
      <h1>My Projects</h1>
      </div>

 
      <Form.Control
        placeholder="Search a project..."
        type="search"
        className="w-25 m-auto mt-5 "
        style={{ border: '1px solid #080F36' }}
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
                <div className="img-wrap"  type="button"
                 >
                  
                    <img src={projects.image} alt="" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      {projects.name}
                    </h5>
                    <p className="card-text">
                      {projects.details}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="spa">Price: <strong className="price"> {projects.price}</strong></span>
                      <Link to={`/projects/${projects.id}`} className="btn btn-primary btn-sm" >Detail</Link>
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
