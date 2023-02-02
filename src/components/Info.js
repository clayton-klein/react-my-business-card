import React from "react";
import "../styles/index.css";
import "../styles/Info.css";
import foto from "../images/clayton-klein.jpg";
import mailIcon from "../images/mail-icon.svg";
import linkedinIcon from "../images/linkedin-icon.svg";

export default function Info() {
  return (
    <section>
      <img
        src={foto}
        className="foto"
        alt="um rapaz moreno de cabelo curto que usa óculos"
      />
      <div className="info">
        <h1 className="info__name">Clayton Klein</h1>
        <h2 className="info__profession">Desenvolvedor Frontend</h2>
        <div className="btns-container">
          <a href="#" className="btns-container__emailBtn" target="_blank">
            <img src={mailIcon} alt="ícone de um envelope"></img> Email
          </a>
          <a
            href="https://www.linkedin.com/in/clayton-klein/"
            className="btns-container__linkedinBtn"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinIcon} alt="as letras de forma 'i e n' da logo do LinkedIn"></img> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
