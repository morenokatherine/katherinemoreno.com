import React from "react";
import { ProgressProps } from "./Progress.interface";

export const Progress = (props: ProgressProps) => {
  const percent = (props.value / props.max) * 100;
  const percentWidth = `${percent}%`;
  return (
    <div
      className="w-full h-6 bg-purple-200 rounded-full border border-purple-500 overflow-hidden flex relative"
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={props.min}
      aria-valuemax={props.max}
      aria-labelledby={props.label}
    >
      <div className="flex h-full w-full absolute">
        <span className="text-sm my-auto mr-auto ml-4 text-white drop-shadow-md">
          {props.label}
        </span>
      </div>
      <div
        className="h-full bg-purple-400 rounded-full"
        style={{
          width: percentWidth,
        }}
      ></div>
    </div>
  );
};
