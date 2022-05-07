import React from "react";
import { ImageProps } from "./Image.interface";

export const Image = (props: ImageProps) => {
  return (
    <img className="rounded-full border-4" src={props.src} alt={props.alt} />
  );
};
