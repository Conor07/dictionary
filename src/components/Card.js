import { useState, useEffect } from "react";
import CardTitle from "./CardTitle";
import CardItem from "./CardItem";
import NumberOfMeanings from "./NumberOfMeanings";
import SingleMeaning from "./SingleMeaning";
import ShowMoreButton from "./ShowMoreButton";
import MultipleMeanings from "./MultipleMeanings";

const Card = ({ data }) => {
  const [numberOfMeanings, setNumberOfMeanings] = useState(0);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    setNumberOfMeanings(data.meanings.length);
  }, [data]);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="card-container">
      <CardTitle text={data.word} />
      <NumberOfMeanings numberOfMeanings={numberOfMeanings} />
      <CardItem heading="phonetic" text={data.phonetic} />
      <CardItem heading="origin" text={data.origin} />
      {numberOfMeanings === 1 ? (
        <div key={"single-meaning-container1"}>
          <SingleMeaning
            titleText={`${data.meanings[0].partOfSpeech}`}
            data={data}
          />
        </div>
      ) : !showMore ? (
        <div key={"single-meaning-container1"}>
          <SingleMeaning
            titleText={`${data.meanings[0].partOfSpeech}`}
            data={data}
          />

          <ShowMoreButton
            text="show more meanings..."
            handleShowMore={handleShowMore}
          />
        </div>
      ) : (
        <div key="multiple-meanings-container">
          <MultipleMeanings data={data} />

          <ShowMoreButton
            text="show less meanings..."
            handleShowMore={handleShowMore}
          />
        </div>
      )}
    </div>
  );
};

export default Card;
