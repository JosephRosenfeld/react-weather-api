//Third party library imports
import React from "react";
import { useState, useEffect } from "react";

//local utilities or misc. imports
import * as api from "./api/index";
import "./App.css";

//Component imports
import Header from "./components/Header";
import ErrorContainer from "./components/ErrorContainer";
import DailyContainer from "./components/DailyContainer";
import WeeklyContainer from "./components/WeeklyContainer";

function App() {
  const [zip, setZip] = useState("");
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(false);

  const fetchData = async (zip) => {
    try {
      const { data } = await api.fetchDays(zip);
      setForecast(data);
      setError(false);
      console.log(data);
    } catch (e) {
      setError(true);
      console.log(e.response);
    }
  };

  return (
    <div className='App'>
      <Header zip={zip} setZip={setZip} fetchData={fetchData} />
      <div className='content-container' id='content-container'>
        {error || !forecast ? (
          /*If there's an error with the api request, or we haven't done
        a single request yet then show the Error Container*/
          <ErrorContainer />
        ) : (
          <>
            <DailyContainer forecast={forecast}></DailyContainer>
            <WeeklyContainer forecast={forecast}></WeeklyContainer>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
