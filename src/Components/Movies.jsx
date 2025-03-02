import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';
import Pagination from './Pagination';

function Movies({ handleAddtoWatchList }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageNo, setpageNo] = useState(1);

    // Methods to handle pagination
    const handlePrev = () => {
        if (pageNo > 1) {
            setpageNo(pageNo - 1);
        }
    };

    const handleNext = () => {
        setpageNo(pageNo + 1);
    };

    // Fetching movie data from the API using Axios
    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/popular?api_key=4bb90c454685f84fd76d669717e24508&language=en-US&page=${pageNo}`)
            .then((res) => {
                setMovies(res.data.results);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching movies:', error);
                setLoading(false);
            });
    }, [pageNo]); // ✅ Correct dependency

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    if (movies.length === 0) {
        return <div className="text-center">No movies found.</div>;
    }

    return (
        <div>
            <div className="text-center m-5 text-2xl font-bold">
                Trending Movies
            </div>

            {/* Display MovieCard components */}
            <div className="flex flex-row flex-wrap justify-around gap-5">
                {movies.map((movieObj) => (
                    <MovieCard
                        key={movieObj.id}
                        movieObj={movieObj}
                        poster_path={movieObj.poster_path}
                        name={movieObj.original_title}
                        handleAddtoWatchList={handleAddtoWatchList}
                    />
                ))}
            </div>

            {/* Pass correctly named props */}
            <Pagination pageNo={pageNo} handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    );
}

export default Movies;
