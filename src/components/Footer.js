export const FooterCard = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center position-relative"
        style={{ height: "150px" }}
      >
        {/* Progress bars */}
        <div
          className="progress-stacked"
          style={{ height: "10px", width: "100%" }}
        >
          <div
            className="progress"
            role="progressbar"
            aria-label="Segment one"
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "15%" }}
          >
            <div className="progress-bar bg-danger"></div>
          </div>
          <div
            className="progress"
            role="progressbar"
            aria-label="Segment two"
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "15%" }}
          >
            <div className="progress-bar bg-success"></div>
          </div>
          <div
            className="progress"
            role="progressbar"
            aria-label="Segment three"
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "15%" }}
          >
            <div
              className="progress-bar"
              style={{ backgroundColor: "#f056b2" }}
            ></div>
          </div>
          <div
            className="progress"
            role="progressbar"
            aria-label="Segment three"
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "15%" }}
          >
            <div
              className="progress-bar"
              style={{ backgroundColor: "#fc7a00" }}
            ></div>
          </div>
          <div
            className="progress"
            role="progressbar"
            aria-label="Segment three"
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "15%" }}
          >
            <div
              className="progress-bar"
              style={{ backgroundColor: "#f23b16" }}
            ></div>
          </div>
          <div
            className="progress"
            role="progressbar"
            aria-label="Segment three"
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "15%" }}
          >
            <div
              className="progress-bar"
              style={{ backgroundColor: "#4209de" }}
            ></div>
          </div>
          <div
            className="progress"
            role="progressbar"
            aria-label="Segment three"
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "15%" }}
          >
            <div
              className="progress-bar bg-info"
              style={{ backgroundColor: "#4209de" }}
            ></div>
          </div>
          <div
            className="progress"
            role="progressbar"
            aria-label="Segment three"
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "15%" }}
          >
            <div
              className="progress-bar"
              style={{ backgroundColor: "#7a0c41" }}
            ></div>
          </div>
          <div
            className="progress"
            role="progressbar"
            aria-label="Segment three"
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "15%" }}
          >
            <div
              className="progress-bar"
              style={{ backgroundColor: "#cce60b" }}
            ></div>
          </div>
          <div
            className="progress"
            role="progressbar"
            aria-label="Segment three"
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "15%" }}
          >
            <div
              className="progress-bar"
              style={{ backgroundColor: "#2de0c8" }}
            ></div>
          </div>
          <div
            className="progress"
            role="progressbar"
            aria-label="Segment three"
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "15%" }}
          >
            <div
              className="progress-bar"
              style={{ backgroundColor: "#54e37a" }}
            ></div>
          </div>
        </div>

        {/* Centered image */}
        <img
          src="https://d3hquexcimrmu6.cloudfront.net/assets/sprites/logos/makerble-mini-logo-transparent-2e543d506b626dfda97d5ae54c54d174d345de3cfc9ec3105c6124e90c018667.png"
          alt="Centered"
          className="position-absolute"
          width={30}
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-2 col-sm-6 text-secondary" style={{fontSize:"10px"}}>
          <h4 className="text-dark">Makerable</h4>
          <p style={{ margin: "2px 0" }}>About us</p>
          <p style={{ margin: "2px 0" }}>Terms & conditions</p>
          <p style={{ margin: "2px 0" }}>Privacy & Cookies</p>
        </div>
        <div className="col-12 col-md-2 col-sm-6 text-secondary" style={{fontSize:"10px"}}>
          <h5 className="text-dark">Organizations</h5>
          <p style={{ margin: "2px 0" }}>Control Panel</p>
          <p style={{ margin: "2px 0" }}>Discover the Marketplace</p>
          <p style={{ margin: "2px 0" }}>Create Organization account</p>
        </div>
        <div className="col-12 col-md-2 col-sm-6 text-secondary" style={{fontSize:"10px"}}>
          <h5 className="text-dark">Your Account</h5>
          <p style={{ margin: "2px 0" }}>Library</p>
          <p style={{ margin: "2px 0" }}>Profile</p>
          <p style={{ margin: "2px 0" }}>Projects</p>
          <p style={{ margin: "2px 0" }}>Help</p>
        </div>
        <div className="col-12 col-md-2 col-sm-6 text-secondary" style={{fontSize:"10px"}}>
          <h5 className="text-dark">Explore</h5>
          <p style={{ margin: "2px 0" }}>Metrics</p>
          <p style={{ margin: "2px 0" }}>Networks</p>
          <p style={{ margin: "2px 0" }}>Strategies</p>
          <p style={{ margin: "2px 0" }}>Projects</p>
          <p style={{ margin: "2px 0" }}>Studies</p>
          <p style={{ margin: "2px 0" }}>Surveys</p>
          <p style={{ margin: "2px 0" }}>Tips</p>
          <p style={{ margin: "2px 0" }}>Vouchers</p>
        </div>
        <div className="col-12 col-md-2 col-sm-6"  style={{fontSize:"10px"}}>
          <h6 className="text-dark">FOLLOW THE MAKERABLE STORY</h6>
          <i
            class="bi bi-linkedin text-primary me-2"
            style={{ fontSize: "2rem" }}
          ></i>
          <i
            class="bi bi-youtube text-danger me-2"
            style={{ fontSize: "2rem" }}
          ></i>
          <i
            class="bi bi-instagram me-2"
            style={{ fontSize: "2rem", color: "#f048b5" }}
          ></i>
          <i
            class="bi bi-twitter text-primary"
            style={{ fontSize: "2rem" }}
          ></i>
          <i
            class="bi bi-facebook text-primary"
            style={{ fontSize: "2rem" }}
          ></i>
        </div>
      </div>

      <div className="row d-flex justify-content-center align-items-center" style={{fontSize:"10px"}}>
        <div className="col-12 col-md-2 col-sm-6 flex-grow-1">
          <div className="row align-items-center ">
            <div className="col-auto">
              <i className="bi bi-chat-fill" style={{ fontSize: "2rem" }}></i>
            </div>

            <div className="col-auto text-start">
              <span>Contact us</span>
              <br />
              <span>contact@makerble.com</span>
              <br />
              <span>©2024</span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-2 col-sm-6"></div>
        <div className="col-12 col-md-2 col-sm-6"></div>
        <div className="col-12 col-md-2 col-sm-6">
          <button type="button" class="btn btn-primary btn-md">
            Request Support
          </button>
        </div>
      </div>
    </>
  );
};
