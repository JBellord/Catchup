import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Suspense } from "react";

async function getMovies() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-GB&page=1",
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDY5ODgxNTFhZWNhMDk5NDIyN2NhMTA5MTdjMTNkYiIsInN1YiI6IjYwZDljMWQ1MGI1ZmQ2MDA0Njk2MzAzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2FUbzCLSGlMMfIsGb4zx4ZmrCSEE81wAkyEUbQIIspQ`,
      },

      cache: "force-cache",
    }
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  //console.log(res.json());
  return res.json();
}

export default async function MovieList() {
  const data = await getMovies();
  return (
    <div className="relative w-full h-full grid grid-cols-6 gap-4 p-2">
      {data.results.map((e, i) => {
        return (
          <MovieCard
            key={i}
            title={e.original_title}
            year={e.release_date}
            imglink={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
          />
        );
      })}
    </div>
  );
}

function MovieCard({ title, imglink, tag, id, year }) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="relative group cursor-pointer rounded-md max-w-[180px] overflow-hidden p-3 max-h-[350px] ease-in-out duration-300 bg-gray-50 hover:bg-gray-200">
        <Image
          alt={title}
          className="relative rounded-md w-full"
          src={imglink}
          width="180"
          height="270"
        />
        <div className="relative py-2 w-full h-auto flex justify-between items-start">
          <div className="relative w-3/4 h-full flex flex-col flex-wrap space-y-1">
            <p className="w-full h-full max-h-8 truncate text-xs font-semibold">
              {title} {title.length > 5 ? "" : "..."}
            </p>
            <span className="relative w-full text-xs text-gray-400">
              {year}
            </span>
          </div>
          <div className="relative">
            <Button variant="ghost" size="icon">
              <DotsVerticalIcon />
            </Button>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
