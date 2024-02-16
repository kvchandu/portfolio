import React from "react";

function HeaderSection() {
  return (
    <div className="header-section mt-5 container-fluid">
      <div className="row d-flex align-items-center header-row">
        {/* <div className="col-3 text-right">
          <img
            src="assets/header.png"
            alt="Your Name"
            className="img-fluid profile-img"
          />
        </div> */}
        <div className=" text-center">
          <h1 className="header-name">Krishna Vamsi Chandu</h1>
          {/* <div className="wrapper">
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
          </div> */}
        </div>

        {/* <div className="col-2 text-left">
          <ul className="list-group contact-info">
            <li className="list-group-item border-top-0 border-bottom-0 border-left-0">
              <a href="https://linkedin.com/kchand23">kchandu@ucsd.edu</a>
            </li>
            <li className="list-group-item border-top-0 border-bottom-0">
              <a href="https://linkedin.com/kchand23">224-714-8908</a>
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
        </div> */}
      </div>
      <div className="row justify-content-center header-content-wrapper align-items-center flex-grow-1">
        <div className="header-content-para">
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
      </div>
    </div>
  );
}

export default HeaderSection;
