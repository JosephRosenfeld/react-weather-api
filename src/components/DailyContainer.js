const DailyContainer = ({ forecast }) => {
  //shortening var references
  const loc = forecast.location.name;
  const region = forecast.location.region;
  const tempurature = forecast.current.temp_f;
  const imgUrl = forecast.current.condition.icon;
  const imgDesc = forecast.current.condition.text;

  //formatting date and time
  let dtTmReg = /(\d\d\d\d)-(\d\d)-(\d\d)\s(\d+):(\d\d)/;
  let tm = forecast.location.localtime;
  let dtTmArr = tm.match(dtTmReg);
  const tmPeriod = dtTmArr[4] > 12 ? "pm" : "am";

  return (
    <div className='cur-weather-container'>
      <div className='cur-left'>
        <div className='cur-location'>{`${loc}, ${region}`}</div>
        <div className='cur-time'>{`as of ${dtTmArr[4]}:${dtTmArr[5]} ${tmPeriod} on ${dtTmArr[3]}-${dtTmArr[2]}-${dtTmArr[1]}`}</div>
        <div className='cur-temp'>{`${tempurature}°`}</div>
      </div>
      <div className='cur-right'>
        <div className='cur-icon'>
          <img src={`https:${imgUrl}`}></img>
        </div>
        <div className='cur-icon-description'>{imgDesc}</div>
      </div>
    </div>
  );
};

export default DailyContainer;
