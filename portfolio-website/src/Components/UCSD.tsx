import CourseWork from "./CourseWork";

function UCSD() {
  return (
    <div className="column-container">
      <h3 className="column-header">Master of Science in Computer Science</h3>
      <h5 className="column-caption">
        Specialization: Artificial Intelligence/Computer Vision
      </h5>
      <div className="positions">
        <p>
          Teaching Assistant: AI Assisted Math and Programming (Python) for
          Business Analytics
        </p>
        <p>Graduate Student Researcher: Mobile Systems Design Lab</p>
      </div>

      <div className="coursework">
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">Advanced Computer Vision</li>
          <li className="list-group-item">
            Statistical Natural Language Processing
          </li>
          <li className="list-group-item">Introduction to Visual Learning</li>
        </ul>
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">Graduate Network Systems</li>
          <li className="list-group-item">Algorithm Design and Analysis</li>
          <li className="list-group-item">Search and Optimization</li>
        </ul>
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">Computer Vision - 1</li>
          <li className="list-group-item">
            Recommender Systems and Web Mining
          </li>
          <li className="list-group-item">
            AI: Probabilistic Reasoning and Learning
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UCSD;
