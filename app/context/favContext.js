"use client"

import { createContext, useState } from "react";

const FavContext = createContext([]);

export const FavProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    return (
        <FavContext.Provider value={[movies, setMovies]}>
            {children}
        </FavContext.Provider>
    );
};

export { FavContext }