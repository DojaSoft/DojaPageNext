"use client"
import React from "react";
import type { FC } from "react";
// Components
import Banner from "@/components/banner/banner";
import About from "@/components/about/about";
import Services from "@/components/services/services";

const Home: FC = (): React.JSX.Element => (
  <main>
    <Banner />
    <About />
    <Services />
  </main>
);

export default Home;
