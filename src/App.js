import React, { useState, useEffect } from "react";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import Error from "./components/Error";
import Footer from "./components/Footer";

import fetchDictionaryAPIData from "./utils/fetchDictionaryAPIData";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBook, faBookOpen, faCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faBook, faBookOpen, faCode, faGithub);

const default_api_url = "dictionary_api_default_word.json";

function App() {
  const [data, setData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const [dataError, setDataError] = useState(false);

  useEffect(() => {
    fetchDictionaryAPIData(
      default_api_url,
      setData,
      setDataLoaded,
      setDataError
    );
  }, []);

  return (
    <div className="App">
      <div className="page-container">
        <header id="header">
          <Logo />
        </header>
        <div className="contents">
          <SearchBar
            setData={setData}
            setDataLoaded={setDataLoaded}
            dataError={dataError}
            setDataError={setDataError}
          />

          {dataLoaded && !dataError ? <Card data={data} /> : <Error />}
        </div>

        <footer id="footer-container">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
