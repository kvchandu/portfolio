import React from "react";

function HeaderSection() {
  return (
    <div className="header-section mt-5 container-fluid">
      <div className="row d-flex align-items-center">
        <div className="col-3 text-right">
          <img
            src="assets/header.png"
            alt="Your Name"
            className="img-fluid profile-img"
          />
        </div>
        <div className="col-7 text-center">
          <h1 className="header-name">Krishna Vamsi Chandu</h1>
          <div className="wrapper">
            <ul className="dynamic-text">
              <li>
                <span>Machine Learning Engineer</span>
              </li>
              <li>
                <span> Full Stack Developer</span>
              </li>
              <li>
                <span>Student Researcher</span>
              </li>
              <li>
                <span>User Interface Designer</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-2 text-left">
          <ul className="list-group contact-info">
            <li className="list-group-item border-top-0 border-bottom-0 border-left-0">
              kchandu@ucsd.edu
            </li>
            <li className="list-group-item border-top-0 border-bottom-0">
              224-714-8908
            </li>
            <li className="list-group-item border-top-0 border-bottom-0">
              <a
                href="https://linkedin.com/kchand23"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/kchand23
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
