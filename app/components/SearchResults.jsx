"use client"

import { useEffect, useState } from "react"
import Card from "./Card";

function SearchResults({ searchText, movies }) {
  const [filteredMovies, setFilteredMovies] = useState(movies);
  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  return (
    <div className="">
        <div className="flex">
            <h1>Top Search Results for &quot;{searchText}&quot;</h1>
        </div>
        <div className="flex-wrap flex justify-center gap-10 h-fit w-fit">
            {filteredMovies.map((movie) => {
                return <Card key={movie.id} movie={movie}></Card>
            })}
        </div>
    </div>
  )
}

export default SearchResults