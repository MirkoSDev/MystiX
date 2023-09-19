import React from "react";
import Instagram from "./assets/instagram.svg";
import Facebook from "./assets/facebook.svg";
import Twitter from "./assets/twitter-x-seeklogo.com-4.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerContainer">
          <div>
            <h1>MystiX</h1>
          </div>
          <div>
            <ul className="footerTxt">
              <a href="#">
                <li>Términos y condiciones</li>
              </a>
              <a href="#">
                <li>Políticas de privacidad</li>
              </a>
              <a href="#">
                {" "}
                <li>Preguntas frecuentes</li>
              </a>
              <a href="#">
                {" "}
                <li>Contacto</li>
              </a>
            </ul>
          </div>
          <div>
            <ul className="footericon">
              <li>
                <a href="#">
                  <img
                    src={Instagram}
                    alt="Instagram"
                    className="footerimg"
                    id="footerIg"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src={Twitter}
                    alt="Twitter"
                    className="footerimg"
                    id="footerTw"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src={Facebook}
                    alt="Facebook"
                    className="footerimg"
                    id="footerFb"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="copyright">
          Copyright © 2023 MystiX - todos los derechos reservados
        </p>
      </footer>
    </>
  );
};

export default Footer;
