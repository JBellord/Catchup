import { Badge } from "@/components/ui/badge";
import React from "react";

export default function Tags() {
  return (
    <div className="p-1">
      <div className="mb-2 font-semibold uppercase text-muted-foreground">
        <h3>Genres</h3>
      </div>
      <div className="mt-2 space-y-1 flex flex-col ">
        <div className="flex justify-start items-center group cursor-pointer px-2 py-1 rounded-md hover:bg-accent">
          <Badge className="w-2 px-0 py-2 bg-yellow-500" />
          <span className="ml-2 font-semibold">Comedy</span>
        </div>
        <div className="flex justify-start items-center group cursor-pointer px-2 py-1 rounded-md hover:bg-accent">
          <Badge className="w-2 px-0 py-2 bg-lime-500" />
          <span className="ml-2 font-semibold">Drama</span>
        </div>
        <div className="flex justify-start items-center group cursor-pointer px-2 py-1 rounded-md hover:bg-accent">
          <Badge className="w-2 px-0 py-2 bg-orange-500" />
          <span className="ml-2 font-semibold">Horror</span>
        </div>
        <div className="flex justify-start items-center group cursor-pointer px-2 py-1 rounded-md hover:bg-accent">
          <Badge className="w-2 px-0 py-2 bg-fuchsia-500" />
          <span className="ml-2 font-semibold">Action</span>
        </div>
        <div className="flex justify-start items-center group cursor-pointer px-2 py-1 rounded-md hover:bg-accent">
          <Badge className="w-2 px-0 py-2 bg-cyan-500" />
          <span className="ml-2 font-semibold">Fantasy</span>
        </div>
        <div className="flex justify-start items-center group cursor-pointer px-2 py-1 rounded-md hover:bg-accent">
          <Badge className="w-2 px-0 py-2 bg-teal-500" />
          <span className="ml-2 font-semibold">Animation</span>
        </div>
      </div>
    </div>
  );
}
