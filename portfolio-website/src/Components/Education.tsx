import CourseWork from "./CourseWork";
function Education() {
  return (
    <>
      <div className="sectionHeader mt-4">
        <h3 className="ms-4">EDUCATION</h3>
      </div>
      <div className="university mt-4 row">
        <h4 className="ms-4 font-weight-bold">
          University of California, San Diego
        </h4>
        <h5 className="ms-auto me-4">Fall 2022 - Fall 2023</h5>
      </div>
      <div className="degree row">
        <h5 className="ms-5">Master of Science in Computer Science</h5>
        <h5 className="ms-auto me-5">GPA: 3.925</h5>
      </div>
      <div className="coursework row">
        <CourseWork specialization="Specialization: Artificial Intelligence/Computer Vision (Click to Expand for relevant Coursework)">
          <div className="ms-3">
            <ul>
              <li>Advanced Computer Vision</li>
              <li>Statistical Natural Language Processing</li>
              <li>Introduction to Visual Learning</li>

              <li>Graduate Network Systems</li>
              <li>Algorithm Design and Analysis</li>
              <li>Search and Optimization</li>

              <li>Computer Vision - 1</li>
              <li>Recommender Systems and Web Mining</li>
              <li>AI: Probabilistic Reasoning and Learning</li>
            </ul>
          </div>
          {/* <p className="ms-3">test</p> */}
        </CourseWork>
      </div>

      <div className="university mt-4 row">
        <h4 className="ms-4 font-weight-bold">
          University of Illinois, Chicago
        </h4>
        <h5 className="ms-auto me-4">Fall 2016 - Spring 2020</h5>
      </div>
      <div className="degree row">
        <h5 className="ms-5">Bachelor of Science in Computer Science</h5>
        <h5 className="ms-auto me-5">GPA: 3.94</h5>
      </div>
      <div className="coursework row">
        <CourseWork specialization="Specialization: Software Engineering, Minor: Mathematics (Click to Expand for relevant Coursework)">
          <div className="ms-3">
            <ul>
              <li>Introduction to Computer Vision</li>
              <li>Advanced Software Engineering</li>
              <li>Android Software Development</li>

              <li>Computer Algorithms - 1</li>
              <li>Object Oriented Design</li>
              <li>Database Systems</li>

              <li>Software Engineering - 1</li>
              <li>Systems Programming</li>
              <li>Computer Architecture</li>
            </ul>
          </div>
          {/* <p className="ms-3">test</p> */}
        </CourseWork>
      </div>
    </>
  );
}

export default Education;
