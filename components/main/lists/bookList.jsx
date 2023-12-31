import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Suspense } from "react";

async function getSampleBooks() {
  const res = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=inauthor:brandon%20sanderson&maxResults=24",
    { cache: "force-cache" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function BookList() {
  const data = await getSampleBooks();
  return (
    <div className="relative w-full h-full grid gap-5 grid-cols-6 p-3">
      {data.items.map((e, i) => {
        return (
          <BookCard
            key={i}
            title={e.volumeInfo.title}
            author={e.volumeInfo.authors[0]}
            imglink={e.volumeInfo.imageLinks.thumbnail}
          />
        );
      })}
    </div>
  );
}

function BookCard({ title, imglink, author, tag, id, year }) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="relative text-wrap group cursor-pointer rounded-md max-w-[180px] overflow-hidden p-3 max-h-[300px] ease-in-out duration-300 bg-gray-50 hover:bg-gray-200">
        <Image
          className="relative rounded-md w-full"
          src={imglink}
          width="180"
          height="270"
        />
        <div className="relative py-2 w-full h-auto flex justify-between items-start">
          <div className="relative w-3/4 h-full flex flex-col flex-wrap space-y-1">
            <p className="w-full h-full max-h-8 truncate text-xs font-semibold">
              {title}
            </p>
            <span className="text-pretty text-xs text-gray-400">{author}</span>
            {/* <Badge className={"w-max bg-green-500 hover:bg-green-500"}>
              Read
            </Badge> */}
          </div>
          <div>
            <Button variant="ghost" size="icon">
              <DotsVerticalIcon />
            </Button>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
