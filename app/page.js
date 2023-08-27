"use client"
import { getTrendingMovies } from "@/utils/apiRequest";
import Card from "./components/Card";
import { FavProvider } from "./context/favContext";
import { createContext, useEffect, useState } from 'react';

export default function Home() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then((data) => {
      setMovies(data)
    }).catch((error) => {
      console.error(error);
    })
  }, [])

  return (
    <FavProvider>
      <div className=' bg-black text-white h-fit w-fit'>
        <hr />
        <div className="flex-wrap flex justify-center gap-10 h-fit w-fit">
          {movies.map((movie) => {
            return <Card key={movies.id} movie={movie} />
          })}
        </div>
      </div>
    </FavProvider>
  )
}
