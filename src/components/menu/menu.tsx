"use client"
import React, { useState } from "react";
import type { FC } from "react";
// Libs
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useMediaQuery } from "@material-ui/core";
// Images
import LogoDoja from "@/images/logo/Logo-DOJA.webp";
import Image from "next/image";
// Style
import { size } from "@/styles/stylesConstants";
import { MenuWrapper, OverlayWrapper } from "./style";

const MenuComponent: FC = (): React.JSX.Element => {
  const [overlayMenu, setOverlayMenu] = useState(false);
  const isMobile = useMediaQuery(`(max-width:${size.tablet.max})`);

  return (
    <MenuWrapper>
      {isMobile ? (
        <nav>
          <Image
            className="menu-logo"
            src={LogoDoja}
            width={100}
            height={100}
            alt="Logo Doja"
            title="Logo Doja"
          />
          <button
            onClick={() => setOverlayMenu(!overlayMenu)}
            className="menu-button"
            type="button"
            aria-label="menu button"
          >
            <MenuIcon className="menu-icon" />
          </button>
        </nav>
      ) : (
        <nav className="container-menu">
          <a href="#banner">
            <Image
              className="menu-logo"
              src={LogoDoja}
              width={100}
              height={100}
              alt="Logo Doja"
              title="Logo Doja"
            />
          </a>
          <ul className="menu-list">
            <li>
              <a href="#banner">Inicio</a>
            </li>
            <li>
              <a href="#about">Quienes somos</a>
            </li>
            <li>
              <a href="#services">Servicios</a>
            </li>
            <li>
              <a href="#footer">Contactanos</a>
            </li>
          </ul>
        </nav>
      )}
      {overlayMenu && (
        <OverlayWrapper>
          <ul className="overlay-list">
            <MenuItem>
              <li>
                <a href="/">Inicio</a>
              </li>
            </MenuItem>
            <MenuItem>
              <li>
                <a href="/">Quienes somos</a>
              </li>
            </MenuItem>
            <MenuItem>
              <li>
                <a href="/">Servicios</a>
              </li>
            </MenuItem>
            <MenuItem>
              <li>
                <a href="/">Contactanos</a>
              </li>
            </MenuItem>
          </ul>
        </OverlayWrapper>
      )}
    </MenuWrapper>
  );
};

export default MenuComponent;
