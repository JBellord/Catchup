import React from "react";
import Title from "./title";
import Status from "./status";
import Tags from "./tags";
import List from "../lists";
import Library from "./mylibrary";
import { ArrowRight } from "iconoir-react";

export default function Section({ name, tags, status, discover }) {
  return (
    <div className="w-full h-full flex justify-start items-start flex-nowrap">
      <div className="px-6 py-10 w-96 h-full bg-transparent border border-r flex flex-col justify-start items-start space-y-8">
        <Title name={name} />
        <div className="w-full space-y-3">
          <Library />
          <div className="cursor-pointer w-full m-0 px-3 py-2 group font-semibold flex justify-between items-center space-x-3 rounded-md hover:bg-accent-foreground">
            <h2 className="group-hover:text-background">Discover {discover}</h2>
            <ArrowRight className="stroke-2 h-4 w-4 group-hover:text-background" />
          </div>
        </div>
      </div>
      <div className="px-6 py-10 w-full h-full">
        <List />
      </div>
    </div>
  );
}
