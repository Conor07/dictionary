const ShowMoreButton = ({ text, handleShowMore }) => {
  return (
    <button className="show-more-button" onClick={handleShowMore}>
      {text}
    </button>
  );
};

export default ShowMoreButton;
