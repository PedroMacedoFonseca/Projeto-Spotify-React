import React, { useState } from 'react';
import "./sidebar.css";
import magicLogo from '../assets/icons/magiclogo.png';

const Sidebar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = (page) => {
    window.location.assign(page);
  };

  const handlePlusClick = () => {
    setIsClicked(!isClicked);
    handleButtonClick('/criar-playlist');
  };

  return (
    <div className="sidebar">
      <div className="block1">
        <nav className="sidebar_navegation">
          <div className="logo">
            <a href="/home">
              <img src={magicLogo} alt="Logo do Magic FM" />
            </a>
          </div>
          <ul>
            <li>
              <button onClick={() => handleButtonClick('/inicio')}>
                <span className="fa fa-home"></span>
                <span>Inicio</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('/buscar')}>
                <span className="fa fa-search"></span>
                <span>Buscar</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('/novidades')}>
                <span className="fa fa-satellite-dish"></span>
                <span>Novidades</span>
              </button>
            </li>
          </ul>
        </nav>
        <div className="library">
          <div className="library_content">
            <button className="library_button">
              <span className="fa fa-heart"></span>
              <span>Minhas Escolhas</span>
            </button>
            <span
              className={`fa fa-plus ${isClicked ? "clicked" : ""}`}
              onClick={handlePlusClick}
            ></span>
          </div>
        </div>
      </div>

      <div className="block2">
        <section className="section-playlist">
          <div className="section-playlist_content">
            <span className="text title">Crie sua primeira playlist</span>
            <span className="text subtitle">É fácil, vamos te ajudar!</span>
            <div className="button-wrapper">
              <button className="section-playlist_button">
                <span>Criar Playlist</span>
              </button>
              <span className="fa fa-music"></span>
            </div>
          </div>
        </section>
        <div className="languages">
          <button className="languages_button">
            <span className="fa fa-globe"></span>
            <span>Português do Brasil</span>
          </button>
        </div>
        <div className="cookies">
          <button className="cookies_button">
            Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
