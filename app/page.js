import { getTrendingMovies, getFavouriteMovies } from "@/utils/apiRequest";
import Card from "./components/Card";

export default async function Home() {
  const movies = await getTrendingMovies();
  const fav = await getFavouriteMovies();
  console.log(movies);
  return (

    <div className=' bg-black text-white'>
      {/* <h1 className="flex justify-center pb-4">Top trending movies</h1> */}
      <hr/>
      <div className="flex-wrap flex justify-center gap-10 w-fit">
        {movies.map((movie) => {
          return <Card key={movies.id} movie={movie} />
        })}
      </div>
    </div>
  )
}
