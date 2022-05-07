import React from "react";
import ReactMarkdown from "react-markdown";
import { SummaryProps } from "./Summary.interface";

export const Summary = (props: SummaryProps) => {
  return (
    <ReactMarkdown className="markdown flex flex-col gap-4">
      {props.data.content}
    </ReactMarkdown>
  );
};
