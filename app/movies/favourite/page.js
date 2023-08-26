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
    return Promise.all(moviePromises);
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
    <div>
      <div>
            <h1>Your Favorite Movies</h1>
            <div className="grid grid-cols-3 gap-4">
                {favoriteMovies.map(movie => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Myfav