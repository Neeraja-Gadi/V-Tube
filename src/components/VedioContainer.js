import React, { useContext ,useState,useEffect} from "react";

import VideoCard  from "../components/VideoCard" ;
import  {Link} from "react-router-dom" ;
import ApiContext from "../context/ContextApi";
import {YOUTUBE_SEARCH_RESULTS_API} from "../utils/constants"


const VedioContainer =() =>  {
    const { videos, searchKeyword } = useContext(ApiContext);
    const [currentVideos, setCurrentVideos] = useState([]);
  
    const getKeywordRelatedVideos = async () => {
      const data = await fetch(YOUTUBE_SEARCH_RESULTS_API + searchKeyword);
      const json = await data.json();
      console.log(json)
      setCurrentVideos(json.items);
    };
  
    useEffect(() => {
      // Fetch keyword related videos when searchKeyword changes
      if (searchKeyword) {
        getKeywordRelatedVideos();
      } else {
        setCurrentVideos(videos);
      }
    }, [searchKeyword, videos]);
  
   
    return  (
        <>
        <div className="flex flex-wrap justify-evenly m-2" >
           { currentVideos?.map(video => 
           <Link key= {video.id} to = {'/watch?v=' + video.id}>
           <VideoCard  key= {video.id} info={video}/>
           </Link>
           )}
         
        </div>
        </>
    )
}

export default VedioContainer ;