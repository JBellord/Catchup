import { Badge } from "@/components/ui/badge";
import React from "react";

export default function Status() {
  return (
    <div className="p-1">
      {/* <div className="mb-2 font-semibold uppercase text-muted-foreground">
        <h3>Status</h3>
      </div> */}
      <div className="mt-2 space-y-1 flex flex-col ">
        <div className="flex justify-start items-center px-3 py-2 rounded-md cursor-pointer hover:bg-accent">
          <Badge className="w-2 px-0 py-2 bg-green-500" />
          <span className="ml-2 font-semibold">Watchlist</span>
        </div>
        <div className="flex justify-start items-center px-3 py-2 rounded-md cursor-pointer hover:bg-accent">
          <Badge className="w-2 px-0 py-2 bg-blue-500" />
          <span className="ml-2 font-semibold">Favourite Movies</span>
        </div>
        <div className="flex justify-start items-center px-3 py-2 rounded-md cursor-pointer hover:bg-accent">
          <Badge className="w-2 px-0 py-2 bg-red-500" />
          <span className="ml-2 font-semibold">Rewatch</span>
        </div>
        <div className="flex justify-start items-center px-3 py-2 rounded-md cursor-pointer hover:bg-accent">
          <Badge className="w-2 px-0 py-2 bg-cyan-500" />
          <span className="ml-2 font-semibold">Recommended Movies</span>
        </div>
      </div>
    </div>
  );
}
