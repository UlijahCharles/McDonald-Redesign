import counterOne from "../assets/mobile1.png";
import counterTwo from "../assets/mobile2.png";
import counterThree from "../assets/mobile3.png";
import counterFour from "../assets/mobile4.png";
import mobileImg from "../assets/MobileApp.png";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";
import "../css/Mobile.css";

function Mobile() {
  return (
    <section className="app-section">
      <h2 className="app-section__title">Our Mobile App</h2>
      <article className="mobile-grid">
        <div className="app-item__one">
          <img src={counterOne} alt="" />
          <h4>Offers</h4>
          <p>Great discounts on your favorites from our menu</p>
        </div>
        <div className="app-item__two">
          <img src={counterTwo} alt="" />
          <h4>Food</h4>
          <p>Get nutritional information on our products</p>
        </div>
        <img className="app-img" src={mobileImg} alt="" />
        <div className="app-item__three">
          <img src={counterThree} alt="" />
          <h4>Restaurants</h4>
          <p>Find your nearest McDonald's restaurant here</p>
        </div>
        <div className="app-item__four">
          <img src={counterFour} alt="" />
          <h4>News</h4>
          <p>Here you will find the latest from McDonald's</p>
        </div>
      </article>
      <aside className="download-container">
        <a href="#">
          <img
            src={playstore}
            alt="Play Store Logo Link"
            className="social-media__img"
          />
        </a>
        <a href="#">
          <img
            src={appstore}
            alt="App Store Logo Link"
            className="social-media__img"
          />
        </a>
      </aside>
    </section>
  );
}

export default Mobile;
