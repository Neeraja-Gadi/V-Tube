import React, { useState, useEffect } from 'react';
import { YOUTUBE_API_URL } from "../utils/constants" ;
import { useNavigate } from 'react-router-dom';

const SideRelatedVideos = () => {

    const navigate=useNavigate()

    const [sideRelatedVideos, setSideRelatedVideos] = useState([])

    useEffect(() => {
        relatedVideos()
    }, [])

    const relatedVideos = async () => {
        const data = await fetch(YOUTUBE_API_URL);
        const json = await data.json()
        console.log(json)
        setSideRelatedVideos(json.items)
        //   console.log(sideRelatedVideos.snippet.title)
    }

    const relatedWatchPage = async(id)=>{
        navigate(`/watch?v=${id}`)
    }

    return (
        <div>

            <div>

                {sideRelatedVideos?.map((rv,i) => (
                    <div className=' flex  flex-column bg-gray-100 my-2 py-5 px-2 w-90 h-15'
                    onClick={() => relatedWatchPage(rv.id)} 
                    style={{ cursor: 'pointer' }} 
                    >
                        <div className='pr-3 w-40 h-25'>
                            <img className=' rounded-lg  '
                                alt="thumbnail"

                                src={rv.snippet.thumbnails.medium.url}></img>
                        </div>
                        <div className='w-60 '>

                            <h4 className='font-semibold line-clamp-2'>{rv.snippet.title}</h4>
                            <p className='text-[12px]'>{rv.snippet.channelTitle}</p>
                            <p className='text-[12px]'>{rv.statistics.viewCount} views</p>
                        </div>

                    </div>
                )

                )}
            </div>


        </div>

    )
}

export default SideRelatedVideos