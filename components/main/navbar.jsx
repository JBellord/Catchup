import React from "react";
import { Button } from "../ui/button";
import {
  Book,
  CinemaOld,
  ReportColumns,
  SelectFace3d,
  Tv,
  UserCircle,
} from "iconoir-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

function Navlink({ name, href, icon }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={href}>
            <Button
              className="hover:bg-primary hover:text-background"
              variant="ghost"
              size="icon"
            >
              {icon}
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent sideOffset={5}>
          <span>{name}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default function Navbar() {
  return (
    <div className="h-full pt-6 pb-6 flex flex-col justify-between items-center">
      <div className="flex flex-col space-y-5 justify-start items-center">
        <div className="mb-8">
          <SelectFace3d height={30} width={30} strokeWidth={2} />
        </div>
        <Navlink
          name={"Dashboard"}
          href={"/home"}
          icon={<ReportColumns strokeWidth={2} />}
        />
        <Navlink
          name={"Movies"}
          href={"/home/movies"}
          icon={<CinemaOld strokeWidth={2} />}
        />
        <Navlink
          name={"TV Shows"}
          href={"/home/shows"}
          icon={<Tv strokeWidth={2} />}
        />
        <Navlink
          name={"Books"}
          href={"/home/books"}
          icon={<Book strokeWidth={2} />}
        />
      </div>
      <div className="mt-10">
        <UserCircle strokeWidth={2} />
      </div>
    </div>
  );
}
