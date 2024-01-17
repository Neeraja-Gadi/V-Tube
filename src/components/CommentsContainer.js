import React, {useState,useEffect} from 'react' ;
import {YOUTUBE_COMMENTS_API} from  "../utils/constants"
// import {Comments} from './Comments';
import  CommentsList from './CommentsList';


const CommentsContainer = ({valueid}) => {
    const [commentsData,setCommentsData] = useState([])

    useEffect(()=>{
        getComments()
    }, [])

    const getComments= async ()=> {
        const data = await fetch(YOUTUBE_COMMENTS_API + valueid)
        const json =await data.json()
        setCommentsData(json.items)
        // console.log(json)
    }
    
  return (
    <div className='m-s p-2'>
    <h1 className='text-2xl font-bold'>Comments</h1> 

    <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer