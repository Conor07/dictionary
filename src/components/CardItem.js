const CardItem = ({ heading, text }) => {
  return (
    <div className="card-item-container">
      <span className="card-item-heading">{heading}:</span>

      <span className="card-item-text">{text}</span>
    </div>
  );
};

export default CardItem;
