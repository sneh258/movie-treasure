import { getTrendingMovies } from "@/utils/apiRequest";
import Card from "./components/Card";

export default async function Home() {
  const movies = await getTrendingMovies();
  return (

    <div className=''>
      <h1>Top trending movies</h1>
      <div className="flex-wrap flex justify-center gap-10 h-fit w-fit">
        {movies.map((movie) => {
          return <Card key={movies.id} movie={movie} />
        })}
      </div>
    </div>
  )
}
