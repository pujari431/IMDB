import React from 'react';
import WatchList from './WatchList';

function MovieCard({ movieObj, poster_path, name, handleAddtoWatchList, handleRemoveWatchList, watchlist }) {

    function doesContain(movieObj) {
        for (let i = 0; i < watchlist.length; i++) {
            if (watchlist[i].id == movieObj.id) {
                return true;
            }
        }
        return false;
    }

    return (
        <div
            className="m-2 h-[40vh] bg-center bg-cover bg-no-repeat rounded-xl hover:scale-110 hover:cursor-pointer 
            flex flex-col justify-between items-end
            w-[40%] sm:w-[22%] lg:w-[12%]"
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})` }}
        >

            {/* Here is the logic to add and remove from the watchlist */}

            {doesContain(movieObj) ? (<div onClick={() => (handleRemoveWatchList(movieObj))} className='m-4 flex 
            justify-center h-8 w-8 items-center rounded  bg-gray-900/50' >❌ </div>) : (
                <div onClick={() => (handleAddtoWatchList(movieObj))} className='m-4 flex justify-center 
                h-8 w-8 items-center rounded  bg-gray-900/50' >
                    &#128525;
                </div>)}
            {/* This is for emoji */}

            {/* Movie name at the bottom */}
            <div className="text-white text-xs w-full p-2 text-center bg-black bg-opacity-70 rounded-b-xl">
                {name}
            </div>
        </div>
    );
}

export default MovieCard;
