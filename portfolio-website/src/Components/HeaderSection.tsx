import React from "react";

function HeaderSection() {
  return (
    <div className="HeaderSection mt-5 container-fluid">
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
          <p className="header-content">
            Welcome to my portfolio! With over 3 years of experience in Full
            Stack Development, I specialize in crafting software that's not just
            functional but also scales seamlessly, prioritizes security, and
            operates with efficiency.{" "}
          </p>
          <p className="header-content">
            I have a passion for building projects that leverage a variety of
            frameworks, tools, and AI advancements, allowing me to explore my
            creativity while delivering practical solutions. Beyond coding, I'm
            an enthusiastic researcher in Computer Vision and Machine Learning.
            My dedication lies in applying the latest developments in these
            domains to address real-world challenges.
          </p>
          <p className="header-content">
            {" "}
            Let's connect and journey together through the exciting realms of
            software and innovation. Feel free to get in touch using the contact
            information below.
          </p>
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
