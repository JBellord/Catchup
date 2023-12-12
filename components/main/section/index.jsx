import React from "react";
import Title from "./title";
import Status from "./status";
import Tags from "./tags";
import List from "../lists";

export default function Section({ name, tags, status }) {
  return (
    <div className="w-full h-full flex justify-start items-start flex-nowrap">
      <div className="px-6 py-10 w-96 h-full bg-transparent border border-r flex flex-col justify-start items-start space-y-8">
        <Title name={name} />
        <Status />
        <Tags />
      </div>
      <div className="px-6 py-10 w-full h-full">
        <List />
      </div>
    </div>
  );
}
