import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import Status from "./status";
import Tags from "./tags";

export default function Library() {
  return (
    <Accordion className="w-full mb-0 " type="single" collapsible>
      <AccordionItem className="border-0" value="item-1">
        <AccordionTrigger className="font-semibold">
          My Library
        </AccordionTrigger>
        <AccordionContent className="space-y-6">
          <Status />
          {/* <Tags /> */}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
