import DayInWeekly from "./DayInWeekly";

const WeeklyContainer = ({ forecast }) => {
  console.log(forecast);
  //For returning JSX as an element make sure you're returning an object
  //(aka no curly braces in the map like its a function definition)
  const days = forecast.forecast.forecastday.map((el, i) => (
    <DayInWeekly
      key={i + 1}
      id={i + 1}
      dt={el.date.substring(5)}
      tmp={el.day.avgtmp_f}
      imgUrl={el.day.condition.icon}
      imgTxt={el.day.condition.text}
    ></DayInWeekly>
  ));

  return (
    <div className='forecast-container'>
      <div id='forecast-title'>Forecast for the Week:</div>
      <div className='forecast-days-container'>{days}</div>
    </div>
  );
};

export default WeeklyContainer;
