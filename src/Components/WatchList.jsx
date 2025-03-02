import React from 'react'

function WatchList() {
    return (
        <>
            {/* Genre Part */}
            <div className='flex justify-center flex-wrap p-4' >
                <div className=' flex justify-center items-center h-[2rem] w-[9rem]  bg-gray-400/50  rounded-xl text-white font-bold hover:cursor-pointer mx-4' >All Genres</div>
                <div className=' flex justify-center items-center h-[2rem] w-[9rem]  bg-blue-400  rounded-xl text-white font-bold hover:cursor-pointer mx-4' >Action</div>
                <div className=' flex justify-center items-center h-[2rem] w-[9rem]  bg-gray-400/50  rounded-xl text-white font-bold hover:cursor-pointer mx-4' >Drama</div>
            </div>
            <div className='flex justify-center items-center my-4' >
                <input type="text" className='h-[2rem] w-[14rem] rounded-md p-2 bg-gray-200 outline-none' placeholder='Search for a movie' />
            </div>

            <div className='border-2 border-gray-300 rounded-lg overflow-hidden mx-4'  >
                <table className='w-full text-gray-500 text-center' >  {/* Here w-full will makes entire rows to have same spaces */}
                    <thead className='border-b-2' >
                        <tr>
                            <th>Moive Name</th>
                            <th>Ratings</th>
                            <th>Popularity</th>
                            <th>Genre</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b-2' >
                            <td className='p-4 flex items-center' >
                                <img className='h-[6rem] w-[6rem] object-cover' src={`https://imgs.search.brave.com/5ItfsWKyHnBCe8JfHk1fmoJnBZPQssfM_LGww6N3Qw4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5HRTBZVFZq/TnpVdE56SmpPUzAw/TkdObExUZ3hNemN0/WlRZNFlURTFZMlkx/WlRVNFhrRXlYa0Zx/Y0djQC5qcGc`} alt="" />
                                <div className='mx-8' >
                                    This Movie
                                </div>
                            </td>
                            <td> 8.5</td>
                            <td>9</td>
                            <td>Action</td>
                            <td className='text-red-700 hover:cursor-pointer'  >Delete</td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </>
    )
}

export default WatchList
