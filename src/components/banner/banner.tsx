"use client"
import React from "react";
import type { FC } from "react";
// Libs
import Image from 'next/image'
// Images
import Hero from "@/images/banner/hero.webp";
// Style
import BannerWrapper from "./style";

const Banner: FC = (): React.JSX.Element => (
  <BannerWrapper id="banner">
    <div className="banner-container">
      <h1>Soluciones Digitales</h1>
      <p>
        Diseñamos y realizamos soluciones tecnológicas para agilizar los
        procesos en tu negocio.
      </p>
    </div>
    <Image
      className="banner-img"
      src={Hero}
      width={100}
      height={100}
      alt="Hero Doja"
      title="Hero Doja"
    />
  </BannerWrapper>
);

export default Banner;
