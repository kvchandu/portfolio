function Projects() {
  return (
    <>
      <div className="sectionHeader mt-5">
        <h3 className="ms-4">PROJECTS</h3>
      </div>
      <div className="card  mx-auto" style={{ width: "90%" }}>
        <div className="row g-0">
          <div className="col-md-3">
            <img
              src="assets/eraser.webp"
              className="img-fluid rounded-start"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-md-9">
            <div className="card-body ms-4">
              <h5 className="card-title">Instance Eraser</h5>
              <p className="card-text">
                Using Google Pixel's Magic eraser as inspiration, utilized
                Generative models to remove objects from images. Utilized
                MaskRCNN for object segmentation and GANs for inpainting.
                Implemented UI using Streamlit.
              </p>
              <a
                href="https://github.com/kvchandu/Instance-Eraser"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card  mx-auto" style={{ width: "90%" }}>
        <div className="row g-0">
          <div className="col-md-3">
            <img
              src="assets/dropbox.png"
              className="img-fluid rounded-start"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-md-9">
            <div className="card-body ms-4">
              <h5 className="card-title">SurfStore</h5>
              <p className="card-text">
                Developed a fault-tolerant web server in Golang with robust file
                handling capabilities by incorporating consistent hashing, file
                version management, file fragmenting, and the RAFT consensus
                algorithm. Optimized parallel processing using Go Routines.
                Leveraged gRPC for efficient client-server communication,
                enabling seamless marshaling and unmarshaling of user upload and
                download operations.
              </p>
              <a
                href="https://github.com/kvchandu/Scalable-File-Management-Sytem"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="card  mx-auto" style={{ width: "90%" }}>
        <div className="row g-0">
          <div className="col-md-3">
            <img
              src="assets/steam.png"
              className="img-fluid rounded-start"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-md-9">
            <div className="card-body ms-4">
              <h5 className="card-title">Steam Recommendation System</h5>
              <p className="card-text">
                Developed a recommendation system that utilizes user Steam
                history and observed game trends to predict the probability of a
                user playing a specific game. Utilized Factorization Machine
                Models and Latent Factor Models to predict the likelihood and
                expected playtime for each game.
              </p>
              {/* <a href="#" className="btn btn-primary">
                Github
              </a> */}
            </div>
          </div>
        </div>
      </div>

      <div className="card  mx-auto" style={{ width: "90%" }}>
        <div className="row g-0">
          <div className="col-md-3">
            <img
              src="assets/chess.png"
              className="img-fluid rounded-start"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-md-9">
            <div className="card-body ms-4">
              <h5 className="card-title">Chess Move Suggestor</h5>
              <p className="card-text">
                Developed a tool that leverages TensorFlow-based vision
                algorithms and the Stockfish engine to recommend optimal moves
                in live online chess games, with CNNs achieving over 95\%
                accuracy in piece identification across multiple design themes.
              </p>
              <a
                href="https://github.com/kvchandu/bestchessmove"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="card  mx-auto" style={{ width: "90%" }}>
        <div className="row g-0">
          <div className="col-md-3">
            <img
              src="assets/flow.jpg"
              className="img-fluid rounded-start"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-md-9">
            <div className="card-body ms-4">
              <h5 className="card-title">Optical Flow Predictions</h5>
              <p className="card-text">
                This GitHub repository serves as a reimplementation of RAFT-S, a
                compact variant of the state-of-the-art RAFT (Recurrent All
                Pairs Field Transforms) model. The purpose of this project was
                to gain a deeper understanding of the complexities involved in
                the RAFT model. RAFT-S was chosen due to its smaller parameter
                space, making it more approachable for learning purposes. By
                exploring and reconstructing RAFT-S, this repository offers
                valuable insights into the inner workings of the RAFT framework.
              </p>
              <a
                href="https://github.com/kvchandu/Optical-Flow-prediction-using-RAFTS"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="card  mx-auto" style={{ width: "90%" }}>
        <div className="row g-0">
          <div className="col-md-3">
            <img
              src="assets/translation.png"
              className="img-fluid rounded-start"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-md-9">
            <div className="card-body ms-4">
              <h5 className="card-title">Code Translation</h5>
              <p className="card-text">
                Utilized Large Language Models like CodeBERT, CodeT5,
                TransCoder, and traditional Seq2Seq models to perform code
                translations from Java to Python. Utilized scraping tools to
                curate a specific dataset for finetuning and evaluation
                purposes.
              </p>
              {/* <a href="#" className="btn btn-primary">
                Github
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
