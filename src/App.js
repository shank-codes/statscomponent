import "./App.css";

function App() {
  return (
    <div className="card">
      <div className="mobileHeaderImage"></div>
      <div className="content">
        <p className="title">
          Get <span>insights</span> that help your business grow.
        </p>
        <p className="description">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div className="stats">
          <div>
            <p className="numeric">10k+</p>
            <p className="statHeading">COMPANIES</p>
          </div>
          <div>
            <p className="numeric">314</p>
            <p className="statHeading">TEMPLATES</p>
          </div>
          <div>
            <p className="numeric">12M+</p>
            <p className="statHeading">QUERIES</p>
          </div>
        </div>
      </div>
      <div className="headerImage"></div>
      {/* <img
        className="headerImage"
        src={process.env.PUBLIC_URL + "/images/image-header-desktop.jpg"}
        alt="people working"
      ></img> */}
    </div>
  );
}

export default App;
