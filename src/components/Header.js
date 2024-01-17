import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { useSelector } from "react-redux";
import { cacheResults } from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";
import VTUBE from "../utils/images/VTUBE Logo.png"

const Header = () => {
     const navigate= useNavigate()

    const [searchQuery, setSearchQuery] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)

    const searchCache = useSelector((store) => store.search)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (typeof searchQuery === 'string' && searchQuery.trim() === '') {
                setSuggestions([]);
                
              }
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery])
            }
            else {
                getSearchSuggestions()
            }

        }, 200);

        return () => {
            clearTimeout(timer)
        };
    }, [searchQuery])


    const getSearchSuggestions = async () => {

        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json()
        setSuggestions(json[1])

        // update the cache

        dispatch(cacheResults({
            [searchQuery] : [json[1]]
           
        }))
    }

   
    const dispatch = useDispatch()
    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }


  
    const onClickSuggestions =async(word) => {
        setSearchQuery(word);
        navigate(`/results?search_query=${word}`)  
      }
  
    return (
      
        <div className="grid grid-flow-col p-4 m-4 shadow-lg">

    <div className="flex flex-row col-span-4 pr-2">
        <img
            onClick={() => toggleMenuHandler()}
            className="h-8 w-10%"
            alt="menu logo"
            src="https://cdn1.iconfinder.com/data/icons/simple-basic-ui-outlined/28/Menu-512.png"
        />
        <img
            className="h-8 w-10% mx-2"
            alt="Vtube logo mx-2"
            src={VTUBE}
        />
    </div>

    <div className="col-span-10 px-7">
        <div>
            <input
                className="px-5 w-1/2 sm:w-1/2 border border-blue-600 p-2 rounded-l-full"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={(e) => setShowSuggestions(true)}
                onBlur={(e) => setShowSuggestions(false)}
            />
            <button
                className="border bg-gray-100 py-2 px-2 border-gray-400 rounded-r-full"
                onClick={() => onClickSuggestions(searchQuery)}
            >
                🔍
            </button>
        </div>
        {showSuggestions && (
            <div className="absolute bg-white py-2 px-5  sm:w-1/3 shadow-lg rounded-lg mt-2">
                <ul>
                    {suggestions?.map((s) => (
                        <li
                            key={s}
                            onMouseDown={() => {
                                setSearchQuery(s);
                                onClickSuggestions(s);
                             
                            }}
                            className="py-2 px-3 hover:bg-gray-200 shadow-sm"
                        >
                            🔍 {s}
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </div>
   

    {/* <div className="flex flex-col">
  <button className="flex  bg-white border border-blue-500 rounded-full p-1 font-semibold">
    <FaUser className="h-4 w-4 text-blue-500 m-2" />
    Signin
  </button>
</div> */}
</div>

        
    )
}

export default Header;