import React from "react";
import { TechImageProps } from "./TechImage.interface";

export const TechImage = (props: TechImageProps) => {
  return <img className="w-10 h-10" src={props.src} alt={props.alt} />;
};
