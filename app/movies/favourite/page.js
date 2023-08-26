"use client"
import Card from "@/app/components/Card"
import { useState, useEffect } from 'react';
import { getMovieDetails } from "@/utils/apiRequest";

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

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            const favoriteIds = JSON.parse(storedFavorites);
            fetchMoviesDetails(favoriteIds)
                .then(movies => setFavoriteMovies(movies))
                .catch(error => console.error('Error fetching movies:', error));
        }
    }, []);

    return (
        <div className="flex-col flex-wrap justify-center text-white bg-black text-white'">
           <hr/>
            <h1 className="flex justify-center pt-4">Your Favorite Movies</h1>
            <div className="pt-6 flex flex-wrap gap-10 justify-center">
                {favoriteMovies.map(movie => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default Myfav;
