const DayInWeekly = ({ id, dt, tmp, imgUrl, imgTxt }) => {
  return (
    <div id={`day${id}`} className='forecast-day'>
      <div className='forecast-date'>{dt}</div>
      <div className='forecast-temp'>{tmp}</div>
      <div className='forecast-img'>
        <img src={imgUrl}></img>
      </div>
      <div className='forecast-text'>{imgTxt}</div>
    </div>
  );
};

export default DayInWeekly;
