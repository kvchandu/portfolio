function UIC() {
  return (
    <div className="column-container">
      <h3 className="column-header">Bachelor of Science in Computer Science</h3>
      <h5 className="column-caption">Specialization: Software Engineering</h5>
      <h5 className="column-caption">Minor: Mathematics</h5>
      <div className="positions">
        <p>
          Teaching Assistant: Software Development for Mobile Platforms (Android
          and Java)
        </p>
        <p>Student Researcher: Computational Biology Lab</p>
      </div>

      <div className="coursework">
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">Introduction to Computer Vision</li>
          <li className="list-group-item">Advanced Software Engineering</li>
          <li className="list-group-item">Android Software Development</li>
        </ul>
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">Computer Algorithms - 1</li>
          <li className="list-group-item">Object Oriented Design</li>
          <li className="list-group-item">Database Systems</li>
        </ul>
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">Software Engineering - 1</li>
          <li className="list-group-item">Systems Programming</li>
          <li className="list-group-item">Computer Architecture</li>
        </ul>
      </div>
    </div>
  );
}

export default UIC;
