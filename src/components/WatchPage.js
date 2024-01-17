import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import SideRelatedVideos from './SideRelatedVideos';
import { YOUTUBE_API_ID } from "../utils/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';


const WatchPage = () => {

  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const [videoDetailsById, setVideoDetailsById] = useState([])
  const [showFullDescription, setShowFullDescription] = useState(false);

  const getvideoDetailsById = async () => {
    const data = await fetch(YOUTUBE_API_ID + searchParams.get('v'))
    const json = await data.json()
    setVideoDetailsById(json.items)
      // console.log( 'kkk' ,json.items)
  }

  useEffect(() => {
    getvideoDetailsById();
    dispatch(closeMenu())
  }, [])

    const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className=' flex'>
      
      <div className=' flex-column  mb-10 px-5 w-70% '>
      <div className='px-5 ' >
      <iframe className=' rounded-lg'
         width="100%"
         height="500"
        src={`https://www.youtube.com/embed/${searchParams.get('v')}?si=3h4yDyy2GUeXczNQ`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullscreen
      ></iframe>
      </div>
      <div className='px-5 py-5'> 
      
         <p className="font-semibold text-[18px] line-clamp-2  bg-gray-100 py-2 px-1">
        {videoDetailsById.length > 0 && videoDetailsById[0].snippet.title}
         </p>
      </div>
      <div className="flex px-5 pb-2">
          {videoDetailsById.length > 0 && (
            <div
              className="h-8 p-3 w-8% rounded-full flex items-center justify-center  bg-blue-200"
              style={{ textTransform: 'uppercase' }}
            >
              {videoDetailsById[0].snippet.channelTitle[0]}
            </div>
          )}

          <ul>
        
            <li className="text-[16px] font-semibold pl-2">
              {videoDetailsById.length > 0 && videoDetailsById[0].snippet.channelTitle}
            </li>


            <li className="text-[12px] pl-2">
              {videoDetailsById.length > 0 && videoDetailsById[0].statistics.viewCount} views
            </li>

          </ul>

        </div>
       
        <div className=' ml-5 px-5 py-4 bg-gray-300 rounded-lg'>
            <h2 className="font-semibold">Description</h2>
            <p className={`text-sm ${showFullDescription ? '' : 'line-clamp-2 pt-1'}`}>
              {videoDetailsById.length > 0 && videoDetailsById[0].snippet.description}
            </p>
           
            {videoDetailsById.length > 0 && videoDetailsById[0].snippet.description.length > 250 && (
              <button onClick={toggleDescription} className="text-blue-500 hover:underline">
                {showFullDescription ? 'Show Less' : 'Show More'}
              </button>
            )}
          </div>

        <CommentsContainer valueid={searchParams.get('v')} />
      </div>
      <div>
      <SideRelatedVideos />
      </div>
      
    </div>
  )
}

export default WatchPage