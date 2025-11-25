import logo from "../assets/logo.png";
import profileIcon from "../assets/profile-icon.png";
import cartIcon from "../assets/cart-icon.png";
import hamburgerIcon from "../assets/hamburger-icon.png";
import locationIcon from "../assets/location-icon.png";
import searchIcon from "../assets/search-icon.png";
import useLocation from "../helper/useLocation";

function Nav() {
  const { location, error } = useLocation();

  console.log("Location:", location);

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-company">
          <img src={logo} alt="" className="nav-logo__img" />
          <p>
            <img src={locationIcon} alt="" />
            {location.latitude && location.longitude}
          </p>
          <img src={searchIcon} alt="" />
          <input type="search" id="site-search" name="q" />
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
