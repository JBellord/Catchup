import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full w-full p-0 m-0">
      <div className="h-96 text-center space-y-6 p-8 flex flex-col justify-end items-center flex-nowrap">
        <h1 className="font-semibold text-6xl">
          Keep track of your interests.
        </h1>
        <span className="w-2/5 text-foreground text-lg">
          Catch Up is great tool for keeping track of your books, movies and
          shows using tags and genres.
        </span>
        <Link href={"/home"}>
          <Button
            className="bg-teal-400 text-foreground font-semibold text-lg px-10 py-6 hover:bg-teal-200"
            size="lg"
          >
            Get Started <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
      <div className="w-full h-3/5 flex justify-center p-4">
        <span>He's span</span>
      </div>
    </div>
  );
}
