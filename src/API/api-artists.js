import { useState } from "react";
import "./api-artists.css"

function useArtistsSearch() {
  const [artists, setArtists] = useState([]);
  const [filteredArtists, setFilteredArtists] = useState([]);
  const [error, setError] = useState(null);

  const searchArtists = async (searchTerm) => {
    if (!searchTerm) {
      setFilteredArtists([]); 
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/artists?name_like=${searchTerm}`);
      const data = await response.json();
      setArtists(data);
      setFilteredArtists(data.filter((artist) => artist.name.toLowerCase().includes(searchTerm.toLowerCase())));
    } catch (err) {
      setError('Erro ao buscar artistas');
      setArtists([]);
      setFilteredArtists([]);
    }
  };

  return { artists, filteredArtists, searchArtists, error };
}

export default useArtistsSearch;
