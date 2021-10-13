import CardSubTitle from "./CardSubTitle";
import CardMeaningItem from "./CardMeaningItem";
import HorizontalLine from "./HorizontalLine";

const MultipleMeanings = ({ data }) => {
  return data.meanings.map((meaning, index) => {
    return (
      <div key={`meanings${index}`}>
        {/* <CardSubTitle text={`meaning ${index + 1}`} /> */}
        <CardSubTitle text={`${meaning.partOfSpeech}`} />

        {meaning.definitions.map((item, index) => {
          return (
            <div key={`definitions${index}-container`}>
              <HorizontalLine />

              <CardMeaningItem meaning={meaning} item={item} index={index} />
            </div>
          );
        })}
      </div>
    );
  });
};

export default MultipleMeanings;
