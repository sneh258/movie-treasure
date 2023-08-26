/* eslint-disable @next/next/no-img-element */
import { getMovieDetails, getSimilarMovies } from './../../../utils/apiRequest';
import Card from "@/app/components/Card";

async function MovieDetailsPage({ params }) {
    const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";
    const movieDetails = await getMovieDetails(params.id);
    const similarMovies = await getSimilarMovies(params.id);

    return (
        <div className=' bg-black text-white'>
            <div className="flex align-center ">
                <div className="ml-2 mt-2 w-[350px] h-[350px]">
                    <img src={IMAGE_BASE_URL + movieDetails.backdrop_path} alt="" className='w-[350px] h-[350px]'/>
                </div>
                <div className="ml-8">
                    <h3 className='mt-8 h-fit w-fit border-2 border-black-300 bg-black text-white p-2'>{movieDetails.title}</h3>
                    <div className="flex gap-2 mt-2">
                        <p className="h-fit w-fit  bg-green-600 text-white p-1">{movieDetails.release_date}</p>
                        <p className="h-fit w-fit  bg-green-600 text-white p-1">{movieDetails.original_language}</p>
                        <p className="h-fit w-fit  bg-green-600 text-white p-1">{movieDetails.status}</p>
                    </div>
                    <div className='mt-4'>
                        <p>{movieDetails?.genres?.map(genre => {
                            return <span className="h-fit w-fit border-2 border-black-300 bg-yellow-500 text-white p-1" key={genre.id}>{genre.name}</span>
                        })}</p>
                    </div>
                    <p className='mt-4'>{movieDetails.overview}</p>
                </div>
            </div>
         
            <div className="flex flex-wrap justify-center">
                <h2 className='pb-2 pt-4'>Similar Movies</h2>
                <hr/>
                <br/><br/>
                <div className="flex flex-wrap gap-3 justify-center">
                    {similarMovies?.map(movie => {
                        return (
                            <Card key={movie.id} movie={movie}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MovieDetailsPage