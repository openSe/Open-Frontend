import React from "react";
import Lupa from '../../assets/header/lupa.png'
import './index.css'

const SearchBox = (onSearch) => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <div className="search-box">
      <div className="input">
        <input type="text" placeholder="Buscar por productos" />

        {/* onChange={handleSearch} */}
      </div>
      <div className="img-logo no-mobile">
        <img src={Lupa} alt="Lupa" />
      </div>
    </div>
  );
};
export default SearchBox;
