import React from 'react'

function Banner() {
    return (
        <div className=' md:h-[75vh] bg-cover bg-center flex items-end' style={{ backgroundImage: `url(https://imgs.search.brave.com/Yn5TOBw9c6nF_nZeUASZM7PrBpphHk0Pr0blkdBiwKQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDM4NTAy/NTIuanBn)` }} >
            <div className='text-white text-xl w-full text-center bg-gray-900/50 p-4  '>
                Avengers Endgame
            </div>
        </div>
    )
}

export default Banner
