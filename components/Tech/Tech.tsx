import React from "react";
import { Progress } from "../Progress/Progress";
import { TechImage } from "../TechImage/TechImage";
import { TechProps } from "./Tech.interface";

export const Tech = (props: TechProps) => {
  return (
    <div className="flex items-center gap-4">
      {props.data.image ? (
        <TechImage src={props.data.image} alt={props.data.title} />
      ) : null}
      <Progress
        value={props.data.rating}
        max={10}
        min={0}
        label={props.data.title}
      />
    </div>
  );
};
