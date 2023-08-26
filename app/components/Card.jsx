"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { BsFillSuitHeartFill } from 'react-icons/bs';

function Card({ movie }) {

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    const toggleFavorite = () => {
        const updatedFavorites = favorites.includes(movie.id)
            ? favorites.filter(id => id !== movie.id)
            : [...favorites, movie.id];
        
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        window.location.reload();
    };
    

    
    const IMAGE_BASE_URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face'
    return (
        <div>
            <div className='w-[250px] h-[450px] mt-2 rounded-lg'>
                <Link className="text-decoration-none" href={"/movies/" + movie.id}>
                    <img src={IMAGE_BASE_URL + movie.poster_path} alt="" className="w-[250px] h-[300px]" />
                </Link>
                <div className="card-body">
                    <div className="flex justify-between">
                        <h5 className='text-lg pt-4 pl-2'><b>{movie.title}</b></h5>
                        <div
                            className={`flex items-center mr-2 pt-4 ${
                                favorites.includes(movie.id) ? 'text-red-500' : 'cursor-pointer'
                            }`}
                            onClick={toggleFavorite}
                        >
                            <BsFillSuitHeartFill />
                        </div>
                    </div>
                    <hr />
                    <p className='line-clamp pl-2 pt-2'>{movie.overview}</p>
                </div>
            </div>

        </div>
    )
}

export default Card