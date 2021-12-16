import SearchBar from "./SearchBar";

const Header = ({ zip, setZip, fetchData }) => {
  return (
    <header className='header' id='header'>
      <div id='header-title'>GOT WEATHER?</div>
      <SearchBar zip={zip} setZip={setZip} fetchData={fetchData} />
    </header>
  );
};

export default Header;
