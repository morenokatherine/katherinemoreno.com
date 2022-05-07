import React from "react";
import { ProgressProps } from "./Progress.interface";

export const Progress = (props: ProgressProps) => {
  return (
    <div
      className="w-full h-5 bg-purple-200 rounded-full border border-purple-500 overflow-hidden"
      role="progressbar"
    >
      <div
        className="h-full bg-purple-400 rounded-full"
        style={{
          width: `${(props.value / props.max) * 100}%`,
        }}
      ></div>
    </div>
  );
};
