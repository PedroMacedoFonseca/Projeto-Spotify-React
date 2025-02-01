import React, { useState } from "react";
import "./playlist-container.css";
import POP from '../assets/quadros/POP.png';
import EDM from '../assets/quadros/EDM.png';
import ROCK from '../assets/quadros/ROCK.png';
import HIPHOP from '../assets/quadros/HIPHOP.png';
import INDIE from '../assets/quadros/INDIE.png';
import REB from '../assets/quadros/REB.png';
import KPOP from '../assets/quadros/KPOP.png';
import REGGAETON from '../assets/quadros/REGGAETON.png';
import TRAP from '../assets/quadros/TRAP.png';
import REGGAE from '../assets/quadros/REGGAE.png';
import BRASIL from '../assets/quadros/BRASIL.png';
import SERT from '../assets/quadros/SERT.png';
import MPB from '../assets/quadros/MPB.png';
import FUNK from '../assets/quadros/FUNK.png';
import FORRO from '../assets/quadros/FORRO.png';
import SAMBA from '../assets/quadros/SAMBA.png';
import JAZZ from '../assets/quadros/JAZZ.png';
import SOUNDTRACK from '../assets/quadros/SOUNDTRACK.png';
import ANOS2000 from '../assets/quadros/ANOS2000.png';
import CLASSICOS from '../assets/quadros/CLASSIC.png';

const playlists = [
    { id: 1, src: POP, alt: "POP Music", label: "POP Music" },
    { id: 2, src: EDM, alt: "Eletro Dance Music", label: "Eletro Dance Music" },
    { id: 3, src: HIPHOP, alt: "HIP-HOP", label: "HIP-HOP" },
    { id: 4, src: ROCK, alt: "Rock", label: "Rock" },
    { id: 5, src: INDIE, alt: "Indie/Alternative", label: "Indie/Alternative" },
    { id: 6, src: REB, alt: "R&B", label: "R&B" },
    { id: 7, src: KPOP, alt: "K-POP", label: "K-POP" },
    { id: 8, src: REGGAETON, alt: "Reggaeton", label: "Reggaeton" },
    { id: 9, src: TRAP, alt: "Trap", label: "Trap" },
    { id: 10, src: REGGAE, alt: "Reggae", label: "Reggae" },
    { id: 11, src: BRASIL, alt: "Brasil", label: "Brasil" },
    { id: 12, src: SERT, alt: "Sertanejo", label: "Sertanejo" },
    { id: 13, src: MPB, alt: "Música Popular Brasileira", label: "Música Popular Brasileira" },
    { id: 14, src: FUNK, alt: "Funk", label: "Funk" },
    { id: 15, src: FORRO, alt: "Forró", label: "Forró" },
    { id: 16, src: SAMBA, alt: "Samba", label: "Samba" },
    { id: 17, src: JAZZ, alt: "Jazz", label: "Jazz" },
    { id: 18, src: SOUNDTRACK, alt: "Soundtrack", label: "Soundtrack" },
    { id: 19, src: ANOS2000, alt: "Anos 2000", label: "Anos 2000" },
    { id: 20, src: CLASSICOS, alt: "Clássicos", label: "Clássicos" },
];

const PlaylistContainer = () => {
    const [clickedCard, setClickedCard] = useState(null);

    const handleClick = (id) => {
        setClickedCard((prevId) => (prevId === id ? null : id));
    };

    return (
        <div className="playlist-container">
            <div id="result-playlists">
                <div className="playlist">
                    <h1 id="greeting">Bem-vindos</h1>
                    <h2 className="greeting-subtitle">Para onde nós vamos:</h2>
                </div>
            </div>
            <div className="offer_scroll-container">
                <div className="offer_list">
                    <section className="offer_list-item">
                        {playlists.map(({ id, src, alt, label }) => (
                            <button 
                                key={id} 
                                onClick={() => handleClick(id)} 
                                className={`cards ${clickedCard === id ? "clicked" : ""}`}
                            >
                                <div className={`cards card${id}`}>
                                    <img src={src} alt={alt} />
                                    <span>{label}</span>
                                </div>
                            </button>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PlaylistContainer;
