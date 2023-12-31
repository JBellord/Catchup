import React from "react";
import Title from "./title";
import Status from "./status";
import Tags from "./tags";
import List from "../lists";
import Library from "./mylibrary";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Section({ name, tags, status, discover, children }) {
  return (
    <div className="w-full h-full flex justify-start items-start flex-nowrap">
      <div className="px-6 py-10 w-80 h-full bg-transparent border border-r flex flex-col justify-start items-start space-y-8">
        <Title name={name} />
        <div className="w-full space-y-3">
          <Library />
          <div className="cursor-pointer w-full m-0 px-3 py-2 group font-semibold flex justify-start items-center space-x-3 rounded-md hover:bg-accent-foreground">
            <h2 className="group-hover:text-background">Discover {discover}</h2>
            <ArrowRightIcon className="stroke-2 h-4 w-4 group-hover:text-background" />
          </div>
        </div>
      </div>
      <div className="p-2 w-full h-full">
        <div className="w-full h-full px-4 flex flex-col justify-start items-start">
          {/* <div className="h-16 w-full px-3">
        <div className="group w-3/12 px-4 flex justify-start items-center h-9 rounded-md border border-input bg-transparent py-1 text-sm shadow-sm transition- focus-within:ring-1 focus-within:ring-ring focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
          <Search className="h-4 w-4 mr-0" />
          <Input
            className="w-full outline-none border-0 shadow-none focus-visible:ring-0"
            type="text"
            placeholder="Search books"
          />
        </div>
      </div>
      <Separator /> */}
          <div className="h-full w-full overflow-hidden">
            <ScrollArea className="relative overflow-x-hidden w-full h-full whitespace-nowrap pr-4 py-0 m-0">
              {children}
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
}
