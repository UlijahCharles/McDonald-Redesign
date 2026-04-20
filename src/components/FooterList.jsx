function FooterList({ title, items }) {
  return (
    <ul className="footer-list">
      <li className="footer-item">
        <h3 className="footer-title">{title}</h3>
      </li>
      {items.map((item, index) => (
        <li className="footer-item" key={index}>
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  );
}

export default FooterList;
