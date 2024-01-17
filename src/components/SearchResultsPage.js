import React, { useEffect, useState } from 'react';
import { YOUTUBE_SEARCH_RESULTS_API } from "../utils/constants";
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useNavigate } from 'react-router-dom';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomNum=[]

for(let i= 0; i<50 ; i++){
    randomNum.push( generateRandomNumber(1, 1000))
}

console.log(randomNum)

const SearchResultsPage = () => {
    const navigate = useNavigate()
    // const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    const searchQuery = searchParams.get('search_query');
    const [searchWordSuggestions, setSearchWordSuggestions] = useState([])


    // useEffect(() => {
    //     dispatch(closeMenu());
    //     console.log('useEffect for dispatch(closeMenu())');
    // }, []);

    useEffect(() => {
        getSuggestedSearch(searchQuery)
    }, [])

    const getSuggestedSearch = async (query) => {
        // console.log('sss',searchQuery)
        const data = await fetch(YOUTUBE_SEARCH_RESULTS_API + query)
        const json = await data.json()
        setSearchWordSuggestions(json.items)
        console.log("qqq", json)

    }

    const relatedWatchPage = async (id) => {
        navigate(`/watch?v=${id}`)
    }
    return (
        <div>

            <div className=' mx-10 my-5 rounded-lg '>

                {searchWordSuggestions?.map((rv,i) => (
                    <div className=' flex  flex-column bg-gray-50 my-2 py-5 px-2 w-90 h-15 rounded-lg'
                        onClick={() => relatedWatchPage(rv.id.videoId)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className='pr-3 w-80 h-45'>
                            <img className=' rounded-lg  '
                                alt="thumbnail"

                                src={rv.snippet.thumbnails.medium.url}></img>
                        </div>
                        <div className='w-100 '>

                            <h4 className='font-semibold line-clamp-2'>{rv.snippet.title}</h4>
                            <p className='text-[12px]'>{`${randomNum[i]}k`} views .</p>
                            <div className="flex pb-2">

                                <div className='flex py-5'>
                                    <div
                                        className=" h-8 p-3 w-8% rounded-full flex items-center justify-center  bg-blue-200"
                                        style={{ textTransform: 'uppercase' }}
                                    >
                                        {rv.snippet.channelTitle[0]}
                                    </div>


                                    <ul>

                                        <li className="text-[16px] font-semibold pl-2">
                                            {rv.snippet.channelTitle}
                                        </li>

                                    </ul>
                                </div>

                            </div>
                            <p className='text-[12px]'>{'Do Sucribe to my Channel for more updates'}</p>

                        </div>

                    </div>
                )

                )}
            </div>

        </div>
    )
}

export default SearchResultsPage
