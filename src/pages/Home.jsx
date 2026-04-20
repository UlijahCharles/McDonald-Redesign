import Footer from "../components/Footer";
import Menu from "../components/Menu";
import SlideShow from "../components/SlideShow";
import Trending from "../components/Trending";
import "../css/Trending.css";

function Home() {
  return (
    <>
      <SlideShow />
      <Menu />
      <section className="trending-section">
        <Trending />
      </section>
      <Footer />
    </>
  );
}

export default Home;
