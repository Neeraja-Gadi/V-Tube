import React, { useState,useEffect } from "react";
import ButtonList from "./ButtonList";
import VedioContainer from "./VedioContainer";
import ApiContext from "../context/ContextApi";
import {YOUTUBE_API_URL} from "../utils/constants" ;

const MainContainer =() =>  {

    const [videos, setVideos] = useState([])
    const [searchKeyword, setSearchKeyword] = useState('');

    const getVideos = async ()=> {
        const data = await fetch(YOUTUBE_API_URL) ;
        const json= await data.json() ;
        setVideos(json.items)
    
    }
    useEffect(
       ()=> {getVideos()}
     , [])

     const getSuggestedSearch = async (searchword) => {
        setSearchKeyword(searchword);
      };

    return  (
        <ApiContext.Provider value = {{  videos ,searchKeyword, getSuggestedSearch }} >
        <div className= "">
        <ButtonList/>
        <VedioContainer/>
        </div>

        </ApiContext.Provider>
    )
}

export default MainContainer ;