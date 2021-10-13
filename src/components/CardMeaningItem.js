import CardItem from "./CardItem";

const CardMeaningItem = ({ meaning, item, index }) => {
  const newkey = (index + 2) * 10;

  return (
    <div key={`definitions${index}`}>
      <CardItem
        key={`definiton${newkey + 1}`}
        heading="definition"
        text={item.definition}
      />

      {/* <CardItem
        key={`meaning${index}`}
        heading="part of speech"
        text={meaning.partOfSpeech}
      /> */}

      <CardItem
        key={`definiton${newkey + 2}`}
        heading="example"
        text={item.example}
      />
    </div>
  );
};

export default CardMeaningItem;
