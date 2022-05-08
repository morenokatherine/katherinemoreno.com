import React from "react";
import ReactMarkdown from "react-markdown";
import { SummaryProps } from "./Summary.interface";

export const Summary = (props: SummaryProps) => {
  return (
    <ReactMarkdown className="markdown flex flex-col gap-4 text-justify sm:text-left">
      {props.data.content}
    </ReactMarkdown>
  );
};
