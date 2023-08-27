"use client"
import Card from "@/app/components/Card"
import { useState, useEffect, useContext } from 'react';
import { getMovieDetails } from "@/utils/apiRequest";
import { FavContext } from "@/app/context/favContext";

function Myfav() {

    async function fetchMoviesDetails(ids) {
        const moviePromises = ids.map(async id => {
            const movie = await getMovieDetails(id);
            return movie;
        });
        const fetchedMovies = await Promise.all(moviePromises);
        const uniqueMovies = fetchedMovies.filter((movie, index, self) =>
            index === self.findIndex(m => m.id === movie.id)
        );
        return uniqueMovies;
    }

    const [favoriteMovies, setFavoriteMovies] = useState([]);
    const [favorites, setFavorites] = useContext(FavContext);
     
    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            const favoriteIds = JSON.parse(storedFavorites);
            setFavorites(favoriteIds);
            fetchMoviesDetails(favoriteIds)
                .then(movies => setFavoriteMovies(movies))
                .catch(error => console.error('Error fetching movies:', error));
        }
    }, []);

    return (
        <div className="flex-col flex-wrap justify-center text-white bg-black text-white min-h-[92vh] ">
            <hr />
            <h1 className="flex justify-center pt-4">Your Favorite Movies</h1>
            <div className="pt-6 flex flex-wrap gap-10 justify-center">
                {favoriteMovies.map(movie => (
                    <Card key={movie.id} movie={movie} reload={()=>{window.location.reload()}} />
                ))}
            </div>
        </div>
    )
}

export default Myfav;
