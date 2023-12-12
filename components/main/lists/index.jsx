import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Search } from "iconoir-react";
import React from "react";

export default function List() {
  return (
    <div className="w-full h-full flex flex-col justify-start items-start">
      <div className="h-16 w-full">
        <div className="group w-4/12 px-4 flex justify-start items-center h-9 rounded-md border border-input bg-transparent py-1 text-sm shadow-sm transition- focus-within:ring-1 focus-within:ring-ring focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
          <Search className="h-4 w-4 mr-0" />
          <Input
            className="w-full outline-none border-0 shadow-none focus-visible:ring-0"
            type="text"
            placeholder="Search books"
          />
        </div>
      </div>
      <Separator />
      <div className="h-full w-full overflow-hidden">
        <ScrollArea className="w-full h-full whitespace-nowrap p-0 m-0"></ScrollArea>
      </div>
    </div>
  );
}
