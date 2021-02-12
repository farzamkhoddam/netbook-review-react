import logo from './page-logo.png';
import './App.css';
import reactDom from 'react-dom';
import footerLogo from '/home/naruto/work/netbook-review-react/src/logo-footer.png';
import rectangle from '/home/naruto/work/netbook-review-react/src/Rectangle-18.png';
import facebook from '/home/naruto/work/netbook-review-react/src/ic24-facebook.png';
import UtubeBackground from '/home/naruto/work/netbook-review-react/src/Rectangle-19.png';
import Utubelogo from '/home/naruto/work/netbook-review-react/src/youtube-1.png';
function App() {
  return (
    <div className="container">
      <div className="border"/>
    <div className="desktop-container">
    <header className="App-header">
    <img className="logo" src={logo} alt="logo"/> 
    <div className="menu-container">
    <a className="header-menu" href="home">HOME</a>
    <a className="header-menu" href="about">ABOUT</a>
    <a className="header-menu" href="'reviews'">REVIEWS</a>
    <a className="earning-button" href="startearning">START EARNING</a>
    </div>
  
    </header>
    <h1> The Ultimate tool to find out the best way for YOU to make <br/> money online?</h1>
    <h2 className="start">Let's get started ...</h2>
    <div className="age-container">
      <h2 className="titles">1. Your Age:</h2>
      <input type="number" class="age" />
    </div>
    <h2 className="titles" style={{marginTop:"4.312rem"
}}>
2. Your Interests:</h2>
  <div className="button-container">
  <div className="button">
    <h3 className="button-lable">Ecommerce</h3>
  </div>
  <div className="button">
    <h3 className="button-lable">Blogging</h3>
  </div>
  <div className="button">
    <h3 className="button-lable">Social Media</h3>
  </div>
  <div className="button">
    <h3 className="button-lable">Youtube</h3>
  </div>
  <div className="button">
    <h3 className="button-lable">Networking</h3>
  </div>
  <div className="button">
    <h3 className="button-lable">Sales</h3>
  </div>
  </div>
  <h2 className="titles" style={{marginTop:"3.5rem"}}>3. Skills your are good at
:</h2>
  <div className="button-container">
    <div className="button">
      <h3 className="button-lable">Marketing</h3>
    </div>
    <div className="button">
      <h3 className="button-lable">Writing</h3>
    </div>
    <div className="button">
      <h3 className="button-lable">Sales</h3>
    </div>
    <div className="button">
      <h3 className="button-lable">Telemarketing</h3>
    </div>
    <div className="button">
      <h3 className="button-lable">Sales</h3>
    </div>
    <div className="button">
      <h3 className="button-lable">Flipping</h3>
    </div>
  </div>
  <h2 className="titles" style={{marginTop:"3.5rem"}}>4. How much money you can invest?</h2>
  {/* <input type="range" min="1" max="100" value="50"/> */}
    </div>
    <footer>
    <div className="footer-content">
    <div className="footer-section">
      <div className="image-container">
      <img src={footerLogo} className="footer-image" alt="footer logo"/>
      </div>
      <div id="second-section">
        <a className="footer-titles" href="home">home</a>
        <a className="footer-titles" href="home">about</a>
        <a className="footer-titles" href="home">Reviews</a>
        <div className="third-sec">
        <div className="facebook-logo">
        <img src={rectangle} alt="face-book-bacground" />
        <img src={facebook} className="facebook" alt="face-book-logo"/>
        </div>
        <div className="Utube-logo">
          <img src={UtubeBackground} alt="Utube background"/>
          <img src={Utubelogo} className="Utube" alt="Utube logo"/>
        </div>
        </div>
        </div>
      </div>
    </div>
    </footer>
    </div>
  );
}

export default App;
