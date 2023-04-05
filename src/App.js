import "./App.css";
import logo from "./assets/images/logo.svg";
import fileImg from "./assets/images/icon-folder.svg";
import docImg from "./assets/images/icon-document.svg";
import uploadImg from "./assets/images/icon-upload.svg";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left box">
          <div className="left-items">
            <img className="logo" src={logo} alt="logo" />
          </div>
            <div className="block">
              <div className="left-items">
                <div className="icon">
                  <img src={fileImg} alt="file" />
                </div>
                <div className="icon">
                  <img src={docImg} alt="doc" />
                </div>
                <div className="icon">
                  <img src={uploadImg} alt="upload" />
                </div>
              </div>
            </div>
        </div>
        <div className="right box">
          <div className="right-items">
            <p>
              You've used <b>815 GB</b>of your storage
            </p>
            <p className="chat">
              185<span>GB LEFT</span>
            </p>
          </div>
          <div className="loader">
            <div className="gradient">
              <div className="dot"></div>
            </div>
          </div>
          <div className="right-items content">
            <p>
              <b>0 GB</b>
            </p>
            <p>
              <b>1000 GB</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
