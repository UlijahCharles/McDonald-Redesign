import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import SlideShow from "../components/SlideShow";
import Trending from "../components/Trending";
import Mobile from "../components/Mobile";
import "../css/Trending.css";

function Home() {
  return (
    <main className="main">
      <Nav />
      <SlideShow />
      <Menu />
      <section className="trending-section">
        <Trending />
      </section>
      <Mobile />
      <Footer />
    </main>
  );
}

export default Home;
