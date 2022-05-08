import React from "react";
import { TechImage } from "../TechImage/TechImage";
import { FooterProps } from "./Footer.interface";

export const Footer = (props: FooterProps) => {
  return (
    <footer className="py-0 p-4 sm:p-8 sm:py-0 xl:px-64">
      <div className="flex flex-col p-4 gap-4 items-center justify-center">
        <p className="text-purple-900">{props.footerData.description}</p>
        <ol className="flex gap-4">
          {props.socialList.map((social) => {
            return (
              <li key={social.index}>
                <a target="_blank" rel="noreferrer" href={social.url}>
                  <TechImage src={social.image} alt={social.title} />
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </footer>
  );
};
