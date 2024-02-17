"use client";
import React from "react";
import type { FC } from "react";
// Libs
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
// Style
import FooterWrapper from "./style";

const Footer: FC = (): React.JSX.Element => {
  const date = new Date();
  const yearCurrent = date.getFullYear();

  return (
    <FooterWrapper id="footer">
      <section>
        <p>Contacto</p>
        <div className="container-contact">
          <p className="footer-contact">
            Bogotá D.C - Colombia
            <br />
            Dojasoft@gmail.com
            <br />
            302 3808800 - 318 8602883
          </p>
        </div>
      </section>
      <section>
        <p>Encuéntranos en:</p>
        <ul className="footer-redes">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              title="link whatsapp"
              href="https://api.whatsapp.com/send/?phone=573023808800&text=Estoy+interesado+en+los+servicios+que+brinda+Doja,+quisiera+mas+información!&app_absent=0"
            >
              <WhatsAppIcon className="footer-icon" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              title="link facebook"
              href="https://www.facebook.com/profile.php?id=100070205302287"
            >
              <FacebookIcon className="footer-icon" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              title="link instagram"
              href="https://www.instagram.com/"
            >
              <InstagramIcon className="footer-icon" />
            </a>
          </li>
        </ul>
      </section>
      <p className="footer-copy">&copy; Doja Soft S.A.S / {yearCurrent}</p>
    </FooterWrapper>
  );
};

export default Footer;
