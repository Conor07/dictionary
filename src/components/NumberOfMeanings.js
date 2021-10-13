const NumberOfMeanings = ({ numberOfMeanings }) => {
  return numberOfMeanings === 1 ? (
    <div className="number-of-meanings">{"1 Meaning Found"}</div>
  ) : (
    <div className="number-of-meanings">{"> 1 Meaning Found"}</div>
  );
};

export default NumberOfMeanings;
