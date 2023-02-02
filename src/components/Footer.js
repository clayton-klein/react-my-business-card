import React from "react";
import twitterIcon from "../images/twitter-icon.svg";
import facebookIcon from "../images/facebook-icon.svg";
import instagramIcon from "../images/instagram-icon.svg";
import githubIcon from "../images/github-icon.svg";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="card-footer">
      <a href="#">
        <img src={twitterIcon} alt="um passarinho azul." />
      </a>
      <a>
        <img src={facebookIcon} alt="letra de forma f." />
      </a>
      <a>
        <img src={instagramIcon} alt="icone de uma câmera fotográfica." />
      </a>
      <a href="https://github.com/clayton-klein">
        <img
          src={githubIcon}
          alt="octocat, um mascote com cabeça de gato e tentáculos de polvo."
        />
      </a>
    </footer>
  );
}
