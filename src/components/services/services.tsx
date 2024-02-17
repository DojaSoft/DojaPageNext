import React from "react";
import type { FC } from "react";
// Components
import Card from "./card/card";
// Constants
import Data from "@/static/constants/constants";
// Style
import ServicesWrapper from "./style";

const Services: FC = (): React.JSX.Element => (
  <ServicesWrapper id="services">
    <h2>Nuestros Servicios</h2>
    <ul>
      {Data.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </ul>
  </ServicesWrapper>
);

export default Services;
