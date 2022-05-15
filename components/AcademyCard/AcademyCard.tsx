import React from "react";
import { AcademyCardProps } from "./AcademyCard.interface";

export const AcademyCard = ({ data }: AcademyCardProps) => {
  return (
    <article>
      <header>
        <h2>{data.period}</h2>
        <a target="_blank" rel="noreferrer" href={data.academy.url}>
          <h3>
            <b className="font-bold">{data.academy.title}</b>
            {" | "}
            <span>Online</span>
          </h3>
        </a>
      </header>
      <a target="_blank" rel="noreferrer" href={data.url}>
        <p>{data.title}</p>
      </a>
    </article>
  );
};
