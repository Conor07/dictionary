import checkForObjectConstructor from "./checkForObjectConstructor";

const oldFetchDictionaryAPIData = async (
  api_url,
  setData,
  setDataLoaded,
  setDataError
) => {
  let fetchError = false;
  console.log(`fetchError BEFORE: ${fetchError}`);

  let data = await fetch(api_url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return {};
      }
    })
    .catch((error) => {
      console.log(`fetchDictionaryData Error: ${error}`);
    });

  const dataIsObject = checkForObjectConstructor(data);

  console.log(`fetchError AFTER: ${fetchError}`);

  let data = await fetch(api_url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return {};
      }
    })
    .catch((error) => {
      console.log(`fetchDictionaryData Error: ${error}`);
    });

  const dataIsObject = checkForObjectConstructor(data);

  if (dataIsObject) {
    setDataError(true);
  } else {
    setData(data[0]);
    setDataLoaded(true);
    setDataError(false);
  }
};

export default oldFetchDictionaryAPIData;
