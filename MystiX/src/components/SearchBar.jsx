
const SearchBar = ({setSearchText}) => {
    
      
  const handleSearch = (e) => {
  setSearchText(e.target.value.toLocaleLowerCase());
  };

  return (
    <>
      <div className="Hcontainer">
        <input onChange={handleSearch}
        type="text" className="Hsearch" placeholder="Buscar..." />
      </div>
      
    </>
  );
};

export default SearchBar;
