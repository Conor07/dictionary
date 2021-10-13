import CardSubTitle from "./CardSubTitle";
import CardMeaningItem from "./CardMeaningItem";
import HorizontalLine from "./HorizontalLine";

const SingleMeaning = ({ titleText, data }) => {
  return (
    <div>
      <CardSubTitle text={titleText} />

      <HorizontalLine />

      <CardMeaningItem
        meaning={data.meanings[0]}
        item={data.meanings[0].definitions[0]}
        index={0}
      />
    </div>
  );
};

export default SingleMeaning;
