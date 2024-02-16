import { useState } from "react";
import CourseWork from "./CourseWork";
import UCSD from "./UCSD";
import UIC from "./UIC";
import CADA from "./CADA";
import DigitalFactory from "./DigitalFactory";
import VirtualPT from "./VirtualPT";
import WildBook from "./WildBook";

function Education() {
  const [isSelected, setIsSelected] = useState(true);
  const [isIndustrySelected, setIsIndustrySelected] = useState(true);
  return (
    <>
      <div>
        <div className="sectionHeader mt-4">
          <h3 className="ms-4">EDUCATION</h3>
        </div>

        <div className="tableContainer mx-auto">
          <div className="row table-row ">
            <div className="col-md-3 table-column ">
              <div
                onClick={() => setIsSelected(!isSelected)}
                className={
                  "row border table-row image-grid " +
                  (isSelected ? "selected" : "not-selected")
                }
              >
                <img src="assets/UCSD_Seal.png" />
              </div>
              <div
                onClick={() => setIsSelected(!isSelected)}
                className={
                  "row table-row border image-grid " +
                  (isSelected ? "not-selected" : "selected")
                }
              >
                <img src="assets/uic.png" />
              </div>
            </div>
            <div className="col-md-9 table-column table-content">
              {isSelected ? <UCSD /> : <UIC />}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="sectionHeader mt-5">
          <h3 className="ms-4">INDUSTRY EXPERIENCE</h3>
        </div>
        <div className="tableContainer mx-auto">
          <div className="row table-row border">
            <div className="col-md-3 table-column border">
              <div
                onClick={() => setIsIndustrySelected(!isIndustrySelected)}
                className={
                  "row border table-row image-grid " +
                  (isIndustrySelected ? "selected" : "not-selected")
                }
              >
                <img src="assets/uic.png" />
              </div>
              <div
                onClick={() => setIsIndustrySelected(!isIndustrySelected)}
                className={
                  "row table-row border image-grid " +
                  (isIndustrySelected ? "not-selected" : "selected")
                }
              >
                <img src="assets/digital-factory.png" />
              </div>
            </div>
            <div className="col-md-9 table-column border table-content">
              {isIndustrySelected ? <CADA /> : <DigitalFactory />}
            </div>
          </div>
        </div>

        {/* <div className="university mt-4 row">
            <h4 className="ms-4 font-weight-bold">University of Illinois</h4>
            <h5 className="ms-auto me-4">August 2020 - May 2022</h5>
          </div>
          <div className="row">
            <h4 className="ms-4">Full Stack Web Developer</h4>
            <p style={{ width: "90%" }} className="ms-5 me-5">
              As the lead web developer for the University of Illinois College
              of the Arts, Architecture, and Design, I played a key role in
              transitioning the department to a remote environment during the
              pandemic. I successfully revamped the website stack by migrating
              from outdated Drupal infrastructure to modern and attractive
              WordPress sites. This involved transferring data from disconnected
              SQL databases and designing custom PHP modules for data
              encapsulation and transfer. I also implemented new features such
              as payment pages, user registration systems, GPA calculators, and
              semester planning tools. Additionally, I contributed to the
              development of a standalone web application for the Jane Addams
              Hull House Museum, which included designing database schemas,
              backend infrastructure, and user interfaces for inventory
              management features. In addition to the development I was also
              responsible for mainitaining the servers and esuring strict
              security policies to prevent any malicious attacks on the web
              infrastructure. I also worked with the IT department to ensure
              that the web infrastructure was compliant with the university's
              security policies. This also included adding networking monitoring
              tools, SSL certificates, and firewalls to the web infrastructure.
            </p>
          </div>
          <div className="university mt-4 row">
            <h4 className="ms-4 font-weight-bold">Digital Factory</h4>
            <h5 className="ms-auto me-4">May 2019 - August 2019</h5>
          </div>
          <div className="row">
            <h4 className="ms-4">Android Developer Intern</h4>
            <p style={{ width: "90%" }} className="ms-5 me-5">
              During my internship at Digital Factory, I contributed to the
              enhancement of a background service that tracked user physical
              activity. The service was part of an expansive library used by
              clients like Blue Cross Blue Shield, for more accurate patient
              diagnosis, and Coca Cola, for location-based advertising. My role
              included introducing location-based activity tracking features,
              optimizing the activity tracking algorithm, and ensuring
              compliance with the latest Android update. This update
              necessitated the use of sticky notifications for background
              tracking and stricter security measures for compatibility with
              other applications. By the end of my tenure, I delivered a
              functional prototype of the Android service, meeting all new
              requirements while maintaining backward compatibility. This
              experience honed my skills in application development and user
              activity tracking.
            </p>
          </div> */}

        <div className="sectionHeader mt-5">
          <h3 className="ms-4">RESEARCH EXPERIENCE</h3>
        </div>

        <div className="tableContainer mx-auto">
          <div className="row table-row border">
            <div className="col-md-3 table-column border">
              <div
                onClick={() => setIsIndustrySelected(!isIndustrySelected)}
                className={
                  "row border table-row image-grid " +
                  (isIndustrySelected ? "selected" : "not-selected")
                }
              >
                <img src="assets/ucsandiego.png" />
              </div>
              <div
                onClick={() => setIsIndustrySelected(!isIndustrySelected)}
                className={
                  "row table-row border image-grid " +
                  (isIndustrySelected ? "not-selected" : "selected")
                }
              >
                <img src="assets/wildbook_logo.png" />
              </div>
            </div>
            <div className="col-md-9 table-column border table-content">
              {isIndustrySelected ? <VirtualPT /> : <WildBook />}
            </div>
          </div>
        </div>

        {/* <div className="university mt-4 row">
          <h4 className="ms-4 font-weight-bold">
            Virtual Physical Therapist - Dr. Sujit Dey
          </h4>
          <h5 className="ms-auto me-4">June 2023 - Present</h5>
        </div>
        <div className="row">
          <p style={{ width: "90%" }} className="ms-5 me-5">
            I'm currently involved in a research study focused on creating a
            remote training and recommendation system for physical therapy
            patients. The project aims to use a webcam to record patient
            exercises, then employ computer vision techniques to analyze the
            form and offer real-time feedback. Our current exploration includes
            the use of 3D pose estimation models for skeletonization, which will
            generate patient pose movements during exercise. Additionally, we
            are investigating vision-language models, utilizing the 3D pose
            information to critique exercises and using a Language Model like
            GPT to deliver suitable real-time feedback to the user.
          </p>
        </div>

        <div className="university mt-4 row">
          <h4 className="ms-4 font-weight-bold">
            Prostate Cancer Research - Dr. Tyler Seibert
          </h4>
          <h5 className="ms-auto me-4">June 2023 - Present</h5>
        </div>
        <div className="row">
          <p style={{ width: "90%" }} className="ms-5 me-5">
            In the Dr.Seibert's lab breakthrough research is being conducted on
            using diffusion MRI images to better detect Prostate cancer to
            enable Radiologists to better understand tumors and Oncologists to
            better treat the disease. My role in the lab was to use diffusion
            MRI images of the prostate and use segmentation models like the
            U-Net to segment the Urethra portion of an MRI. Being able to
            distinguish urethra from the prostate would help the doctors during
            surgery and biopsy to better treat the tumor in the prostate while
            not damaging or interfering with the urethra.
          </p>
        </div>
        <div className="university mt-4 row">
          <h4 className="ms-4 font-weight-bold">
            Wildbook Project - Dr. Tanya Berger-Wolf
          </h4>
          <h5 className="ms-auto me-4">May 2017 - August 2020</h5>
        </div>
        <div className="row">
          <p style={{ width: "90%" }} className="ms-5 me-5">
            During my tenure as a research assistant with the Wildbook Project,
            our goal was to utilize computer vision techniques to build an
            animal recognition software, aiding studies on wildlife populations
            and migration patterns. My key role involved creating a NoSQL data
            pipeline to collate wildlife images from popular platforms like
            Flickr and Bing. A geotag filtration system was incorporated to
            exclude images of captive animals, ensuring only wildlife data was
            processed. The acquired images were preprocessed for use in neural
            networks, helping in distinct animal identification. We then
            employed the well-established 'mark-recapture' method, a technique
            prevalent in biology, to estimate wildlife populations. Remarkably,
            we attained a 90% accuracy rate in predicting Reticulated Giraffes
            and Humpback whales populations solely based on social media images.
          </p>
        </div> */}
      </div>
    </>
  );
}

export default Education;
