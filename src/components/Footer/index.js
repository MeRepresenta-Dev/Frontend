import React from "react";

import whatsapp from "./icons/whatsapp.svg";
import youtube from "./icons/youtube.svg";
import facebook from "./icons/facebook.svg";
import altec from "./icons/altec.png";
import tiniguimaraes from "./icons/tiniguimaraes.png";
import casa1 from "./icons/casa-1.png";
import zoly from "./icons/saibamais-zoly.png";
import undef from "./icons/undef.png";
import ciudadania from "./icons/cidadania-inteligente.png";
import avina from "./icons/avina.png";
import omidyar from "./icons/omidyar.png";
import mattos from "./icons/mattos-filho-veiga-filho-marrey-jr-e-quiroga-advogados-original.png";
import dataLabel from "./icons/data-lavel.png";
import silveira from "./icons/silveira_andrade.png";

import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerWrapper">
        <div className="footerNavigations">
          <div className="about">
            <span>Sobre</span>
            <nav>
              <ul>
                <li>
                  <a href="#">Quem somos</a>
                </li>
                <li>
                  <a href="#">Impacto</a>
                </li>
                <li>
                  <a href="#">Transparência</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="join">
            <span>Participar</span>
            <nav>
              <ul>
                <li>
                  <a href="#">Candidato</a>
                </li>
                <li>
                  <a href="#">Eleitor</a>
                </li>
                <li>
                  <a href="#">Voluntário</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="financing">
            <span>Financiamento</span>
            <ul>
              <li>
                <img src={ciudadania} alt="Ciudadania Inteligente" />
              </li>
              {/* <li>
                <img src={altec} alt="Uma iniciativa de Altec" />
              </li> */}
              <li>
                <img src={undef} alt="Undef" />
              </li>
              <li>
                <p id="iniciativa-titulo">uma iniciativa de</p>
              </li>
              <li>
                <img src={avina} alt="Avina" />
                <img src={omidyar} alt="Omidyar" />
              </li>
            </ul>
          </div>
          <div className="support">
            <span>Apoio</span>
            <div className="supportWrapper">
              <img src={zoly} alt="Saiba Mais Zoly" />
              <img src={mattos} alt="Mattos Filho" />
              <img src={silveira} alt="Silveira Andrade" />
              <img src={casa1} alt="Casa 1" />
              <img src={tiniguimaraes} alt="Tini e Guimarães" />
            </div>
            <img src={dataLabel} alt="Data Labe" />
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="copyrightWrapper">
          <p>Todos os direitos reservados a #MeRepresenta 2018</p>
          <div className="socialḾedia">
            <nav>
              <ul>
                <li>
                  <img src={whatsapp} alt="Whatsapp" />
                </li>
                <li>
                  <img src={youtube} alt="YouTube" />
                </li>
                <li>
                  <img src={facebook} alt="Facebook" />
                </li>
                <li>
                  <a href="#">Contato</a>
                </li>
                <li>
                  <a href="#">Perguntas?</a>
                </li>
                <li>
                  <a href="#">Termos de Uso</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
