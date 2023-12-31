import BookList from "@/components/main/lists/bookList";
import Section from "@/components/main/section";
import React from "react";

export default function Home() {
  return <Section name={"Books"} discover={"Books"} children={<BookList />} />;
}
