import logo from "../assets/logo.png";
import profileIcon from "../assets/profile-icon.png";
import cartIcon from "../assets/cart-icon.png";
import hamburgerIcon from "../assets/hamburger-icon.png";
import locationIcon from "../assets/location-icon.png";
import searchIcon from "../assets/search-icon.png";
import useLocation from "../helper/useLocation";
import reverse from "reverse-geocode";

function Nav() {
  const { location } = useLocation();

  const locationName = `${
    reverse.lookup(location.latitude, location.longitude, "us").city
  }, ${reverse.lookup(location.latitude, location.longitude, "us").zipcode}`;

  const handleRevealSearch = () => {
    const searchInput = document.getElementById("site-search");
    if (searchInput.classList.contains("hidden")) {
      searchInput.classList.toggle("hidden");
      searchInput.classList.remove("closeAnimation");
      searchInput.classList.add("openAnimation");
    } else {
      searchInput.classList.remove("openAnimation");
      searchInput.classList.add("closeAnimation");
      setTimeout(() => {
        searchInput.classList.add("hidden");
      }, 3000);
      clearTimeout();
    }
  };

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-company">
          <img src={logo} alt="Mcdonald Logo" className="nav-logo__img" />
          <div className="nav-location">
            <img src={locationIcon} alt="location-marker" />
            {locationName}
          </div>
          <img
            src={searchIcon}
            alt="search-icon"
            onClick={handleRevealSearch}
          />
          <input className="hidden" type="search" id="site-search" name="q" />
        </li>

        <li className="nav-main-menu">
          <p>Menu</p>
          <p>Coupons</p>
          <p>Exclusive deals</p>
          <p>Restaurants</p>
        </li>
        <li className="nav-user">
          <p>$0.00</p>
          <img src={cartIcon} alt="" />
          <img src={profileIcon} alt="" />
          <p>Name</p>
          <img src={hamburgerIcon} alt="" />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
