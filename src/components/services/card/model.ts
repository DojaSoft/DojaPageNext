import { StaticImageData } from "next/image";

export interface ICard {
  src: StaticImageData;
  alt: string;
  title: string;
  description: string;
}
