import MovieList from "@/components/main/lists/movieList";
import Section from "@/components/main/section";
import React from "react";

export default function Home() {
  return (
    <Section name={"Movies"} discover={"Movies"} children={<MovieList />} />
  );
}
