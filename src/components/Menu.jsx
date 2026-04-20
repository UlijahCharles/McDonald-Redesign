import menuData from "../assets/data/mcdonalds_menu.json";
import { useRef, useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import menuItems from "../assets/data/mcdonalds_menu.json";

import "../css/Menu.css";
import MenuItem from "./MenuItem";
function Menu() {
  const navRefs = useRef([]);
  const indicatorRef = useRef(null);
  const allRef = useRef(null);
  const deliveryRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [menu, setMenu] = useState([]);

  console.log(menuItems);
  const defaultMenu = menuItems
    .filter((item) => item.category === "Breakfast")
    .map((item) => {
      return <MenuItem title={item.name} img={item.main_image} price={1} />;
    });

  console.log(menu);
  function menuClick(e) {
    e.preventDefault();
    navRefs.current.forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active");
    setSearchParams(`?menu=${e.target.innerText}`);
    console.log(searchParams.get("menu"));
    moveIndicator(e.target);
  }

  function moveIndicator(menuEl) {
    indicatorRef.current.style.left =
      menuEl.getBoundingClientRect().left + "px";
    indicatorRef.current.style.width =
      menuEl.getBoundingClientRect().width + "px";
  }

  function filterClick(e) {
    if (e.target.classList.contains("active")) {
      return;
    } else {
      const oppEl = e.target !== allRef.current ? allRef : deliveryRef;
      oppEl.current.classList.remove("active");
      e.target.classList.add("active");
    }

    //e.target.classList.add("active");
  }

  useEffect(() => {
    navRefs.current[0].classList.add("active");
    moveIndicator(navRefs.current[0]);
  }, []);

  const categories = menuData
    .map((item) => {
      return item.category;
    })
    .reduce((arr, item) => {
      if (!arr.includes(item)) arr.push(item);
      return arr;
    }, [])
    .map((item, i) => {
      return (
        <li
          key={i}
          className="menu-list__type"
          onClick={menuClick}
          ref={(el) => (navRefs.current[i] = el)}
        >
          {item}
        </li>
      );
    });

  return (
    <>
      <nav className="menu-nav">
        <header className="menu-nav-header">
          <h1>Menu</h1>

          <div className="menu-nav-buttons">
            <button
              className="menu-nav-buttons__all active"
              onClick={filterClick}
              ref={allRef}
            >
              All products
            </button>
            <button
              className="menu-nav-buttons__delivery"
              onClick={filterClick}
              ref={deliveryRef}
            >
              For delivery
            </button>
          </div>
        </header>

        <ul
          className="menu-nav-filter"
          onScroll={() => {
            console.log(navRefs.current[10].getBoundingClientRect().left);
          }}
        >
          {categories}
        </ul>
        <div className="indicator-container">
          <div id="indicator-under"></div>
          <div id="indicator" ref={indicatorRef}></div>
        </div>
      </nav>
      <section className="menu-section">
        <ul className="menu-list">{menu.length === 0 ? defaultMenu : menu}</ul>
      </section>
    </>
  );
}

export default Menu;
