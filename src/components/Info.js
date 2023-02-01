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
      <h1 className="name">Clayton Klein</h1>
      <h2 className="profession">Desenvolvedor Frontend</h2>
      <div className="btns-container">
        <a href="#" className="emailBtn" target="_blank">
          <img src={mailIcon} alt="ícone de um envelope"></img> Email
        </a>
        <a
          href="https://www.linkedin.com/in/clayton-klein/"
          className="linkedinBtn"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="as letras 'in' da logo do LinkedIn"></img> LinkedIn
        </a>
      </div>
    </section>
  );
}
