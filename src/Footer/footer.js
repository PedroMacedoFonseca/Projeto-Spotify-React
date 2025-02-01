import React, { useState } from "react";
import "./footer.css";

const Footer = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <footer className="disclaimer-premium">
            <div className="text">
                <p className="disclaimer-premium_title">Teste a versão paga por 7 dias</p>
                <p className="disclaimer-premium_subtitle">
                    Inscreva-se para curtir o seu som preferido. Não é necessário cartão de crédito.
                </p>
            </div>
            <div className="disclaimer-premium_bottom">
                <button>Faça o cadastro aqui</button>
            </div>
            <button className="close-footer" onClick={() => setIsVisible(false)}>X</button>
        </footer>
    );
};

export default Footer;
