import React from "react";


const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const randomNum = generateRandomNumber(100000, 1000000);


const VideoCard = ({ info }) => {

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const viewCount = statistics ? statistics.viewCount : randomNum
  return (
   
    <div className="flex flex-wrap p-2  sm:w-80  ">
      <img className="rounded-lg"
      alt =  "thumbnail" 
      src= {thumbnails.medium.url}/>
      <div>
      <div className="flex pr-5  py-5 ">
      
       <div
      className="h-8 p-3 w-8% rounded-full flex items-center justify-center text-black font-bold bg-blue-300"
      style={{ textTransform: 'uppercase' }}
    >
      {channelTitle[0]}  
    </div>
       <ul>
          <li className="font-semibold line-clamp-2 pl-2">{title}</li>
          <li className="text-[12px] pl-2">{channelTitle}</li>
           <li className="text-[12px] pl-2">{viewCount} views</li> 

      </ul>
    </div>
      </div>
    </div>
  
      )
}

      export default VideoCard