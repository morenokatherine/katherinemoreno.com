import React from "react";
import { Progress } from "../Progress/Progress";
import { TechImage } from "../TechImage/TechImage";
import { TechProps } from "./Tech.interface";

export const Tech = (props: TechProps) => {
  return (
    <div className="flex items-center gap-4">
      <TechImage src={props.data.image} alt={props.data.title} />
      <Progress value={props.data.rating} max={10} min={0} />
    </div>
  );
};
