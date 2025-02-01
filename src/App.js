import "./App.css";
import Sidebar from "./Sidebar/sidebar.js";
import Footer from "./Footer/footer.js";
import { useState, useEffect } from "react";
import Header from "./Header/header.js";
import useArtistsSearch from "./API/api-artists.js";
import PlaylistContainer from "./Playlist-container/playlist-container.js";

function App() {
  const { filteredArtists, searchArtists, error } = useArtistsSearch();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm) {
      searchArtists(searchTerm);
    }
  }, [searchTerm, searchArtists]);

  return (
    <div>
      <Sidebar />
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} error={error} />
      <main className="main-content">
        {searchTerm ? (
          <div className="search-results">
            {filteredArtists.length > 0 ? (
              filteredArtists.map((artist) => (
                <div key={artist.id} className="artist-card">
                  <div className="card-img">
                    <img id="artist-img" src={artist.urlImg} alt={artist.name} />
                  </div>
                  <div className="card-text">
                    <p id="artist-name">{artist.name}</p>
                    <p className="artist-categorie">{artist.genre}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>Não há resultados para "{searchTerm}".</p>
            )}
          </div>
        ) : (
          <div>
          &nbsp;
          <PlaylistContainer />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
