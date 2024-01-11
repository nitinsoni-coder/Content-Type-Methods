import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1>Content-Type methods</h1>
      <div className="box">
        <div className="item">
          <Link to="/jsonForm">application/json</Link>
        </div>

        <div className="item">
          <Link to="/multipartForm">multipart/form-data</Link>
        </div>

        <div className="item">
         <Link to="/urlEncodedForm">application/x-www-form-urlencoded</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
