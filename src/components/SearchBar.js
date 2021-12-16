const SearchBar = ({ zip, setZip, fetchData }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    if (zip.length < 5) {
      alert("not a valid zip code, please try again");
      return;
    }
    fetchData(zip);
    setZip("");
  };
  const zipRegEx = /^[0-9]{0,5}$/;
  const onChange = (e) => {
    if (zipRegEx.test(e.target.value)) {
      setZip(e.target.value);
    }
  };
  return (
    <div id='search-bar'>
      <div id='search-bar-instructions'>Enter Zip Code:</div>
      <form onSubmit={onSubmit}>
        <input value={zip} onChange={onChange} type='text' name='zip' />
        <button id='search-button'>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
