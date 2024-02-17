import React from "react";
import type { FC } from "react";
// Libs
import Image from "next/image";
// Style
import CardWrapper from "./style";
// Model
import { ICard } from "./model";

const Card: FC<{ item: ICard }> = ({
  item,
}: {
  item: ICard;
}): React.JSX.Element => (
  <CardWrapper>
    <Image
      width={100}
      height={100}
      src={item.src}
      alt={item.alt}
      title={item.alt}
      className="card-image"
    />
    <h3>{item.title}</h3>
    <p>{item.description}</p>
  </CardWrapper>
);

export default Card;
