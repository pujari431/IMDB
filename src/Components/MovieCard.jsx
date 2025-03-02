import React from 'react';

function MovieCard({ movieObj, poster_path, name, handleAddtoWatchList }) {
    return (
        <div
            className="m-2 h-[40vh] bg-center bg-cover bg-no-repeat rounded-xl hover:scale-110 hover:cursor-pointer flex flex-col justify-between items-end
            w-[40%] sm:w-[22%] lg:w-[12%]"
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})` }}
        >
            {/* This is for emoji */}
            <div onClick={() => (handleAddtoWatchList(movieObj))} className='m-4 flex justify-center h-8 w-8 items-center rounded  bg-gray-900/50' >
                &#128525;
            </div>
            {/* Movie name at the bottom */}
            <div className="text-white text-xs w-full p-2 text-center bg-black bg-opacity-70 rounded-b-xl">
                {name}
            </div>
        </div>
    );
}

export default MovieCard;
