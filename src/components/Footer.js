import React from "react";
import twitterIcon from "../images/twitter-icon.svg";
import facebookIcon from "../images/facebook-icon.svg";
import instagramIcon from "../images/instagram-icon.svg";
import githubIcon from "../images/github-icon.svg";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="card-footer">
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <img src={twitterIcon} alt="um passarinho azul." />
      </a>
      <a href="https://pt-br.facebook.com/" target="_blank" rel="noreferrer">
        <img src={facebookIcon} alt="letra de forma f." />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <img src={instagramIcon} alt="icone de uma câmera fotográfica." />
      </a>
      <a
        href="https://github.com/clayton-klein"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={githubIcon}
          alt="octocat, um mascote com cabeça de gato e tentáculos de polvo."
        />
      </a>
    </footer>
  );
}
