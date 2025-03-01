import React from 'react';

function MovieCard({ poster_path, name }) {
    return (
        <div
            className="m-2 h-[40vh] bg-center bg-cover bg-no-repeat rounded-xl hover:scale-110 hover:cursor-pointer flex flex-col gap-y-10 justify-end items-center
            w-[40%] sm:w-[22%] lg:w-[12%]"
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})` }}
        >
            {/* Movie name at the bottom */}
            <div className="text-white text-xs w-full p-2 text-center bg-black bg-opacity-70 rounded-b-xl">
                {name}
            </div>
        </div>
    );
}

export default MovieCard;
