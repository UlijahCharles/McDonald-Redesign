export default function Slide({ slide }) {
  const {
    title,
    description,
    buttonUrl = "#",
    buttonText,
    finePrint = "",
    image,
  } = slide;
  return (
    <div className="slide current-slide">
      <div className="slide-info-container">
        <h1 className="slide-title">{title}</h1>
        <p className="slide-description">{description}</p>
        <button className="slide-button" href={buttonUrl}>
          {buttonText}
        </button>
        {finePrint && <p className="slide-fineprint">{finePrint}</p>}
      </div>
      <div className="slide-image-container">
        <img className="slide-image" src={image} alt={""} />
      </div>
    </div>
  );
}
