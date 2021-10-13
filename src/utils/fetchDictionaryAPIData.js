const fetchDictionaryAPIData = async (
  aPIURL,
  setData,
  setDataLoaded,
  setDataError
) => {
  let fetchError = false;

  let data = await fetch(aPIURL)
    .then((response) => {
      if (response.ok) {
        fetchError = false;
        return response.json();
      } else if (response.statusText === 404) {
        fetchError = true;
        return {};
      } else {
        fetchError = true;
        return {};
      }
    })
    .catch((error) => {
      console.log(`fetchDictionaryData Error: ${error}`);
    });

  if (!fetchError) {
    setData(data[0]);
    setDataLoaded(true);
    setDataError(false);
  } else {
    setDataLoaded(false);
    setDataError(true);
  }
};

export default fetchDictionaryAPIData;
