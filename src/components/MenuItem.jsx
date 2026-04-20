import icon from "../assets/add-button.png";

function MenuItem({ title, img, price, cssClass = "menu-item" }) {
  return (
    <li className={cssClass}>
      <img className="menu-item__img" src={img} alt={`${title} image`} />
      <p className="menu-item__title">{title}</p>
      <div className="menu-item__container">
        <p className="menu-item__price">{`$${price}`}</p>
        <img className="menu-item__button" src={icon} alt="add to cart icon" />
      </div>
    </li>
  );
}

export default MenuItem;
