import React from "react";
import "./header.css";
import smallRight from '../assets/icons/small-right.png';
import smallLeft from '../assets/icons/small-left.png';
import search from '../assets/icons/search.png';

const Header = ({ searchTerm, setSearchTerm, error }) => {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <nav className="header_navigation">
      <div className="navigation">
        <button className="arrow-left">
          <img src={smallLeft} alt="Left arrow" />
        </button>
        <button className="arrow-right">
          <img src={smallRight} alt="Right arrow" />
        </button>
        <div className="head_search">
          <img src={search} alt="Search icon" />
          <input
            id="search-input"
            maxLength="800"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            placeholder="O que você quer ouvir?"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="header_login">
        <button className="subscribe">Inscreva-se</button>
        <button className="login">Entrar</button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </nav>
  );
};

export default Header;
