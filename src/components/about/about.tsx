"use client"
import React from "react";
import type { FC } from "react";
// Style
import AboutWrapper from "./style";

const About: FC = (): React.JSX.Element => (
  <AboutWrapper id="about">
    <h2>¿Quienes somos?</h2>
    <p>
      Somos una empresa colombiana, que comercializa y desarrolla soluciones
      informáticas y tecnológicas. Los productos de DOJA SOFT han sido creados
      con recursos de última generación. Nuestras soluciones están totalmente
      integradas, proporcionándole el control de: procesos operativos,
      administrativos y financieros. Contamos con soluciones de negocio
      orientadas a incrementar la eficiencia de los procesos y operaciones de
      nuestros clientes en distintas áreas.
    </p>
  </AboutWrapper>
);

export default About;
