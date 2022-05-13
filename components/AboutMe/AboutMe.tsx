import React from "react";
import { AboutMeProps } from "./AboutMe.interface";
import { Image } from "../Image/Image";

export const AboutMe = (props: AboutMeProps) => {
  return (
    <div className="flex flex-col-reverse gap-4 md:gap-6 md:flex-row xl:justify-between items-center">
      <h1 className="text-2xl text-center md:text-left md:text-3xl">
        {props.data.title} <span>{props.data.content}</span>
      </h1>
      <div className="flex-shrink-0 min-w-48 min-h-48 w-48 h-48 grid items-center">
        <Image src={props.data.image} alt="Katherine Moreno" />
      </div>
    </div>
  );
};
