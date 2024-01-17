import React from 'react'

const Comments = ({ CommentsData }) => {

  const { topLevelComment } = CommentsData.snippet
  return (
   
    <div className="  flex flex-column  shadow-sm p-2 m-2 ">
      <img className="rounded-full w-8 h-8 mr-5"
        alt="profileImage"
        src={topLevelComment.snippet.authorProfileImageUrl} />
      <div>
        <ul>
          <li className="text-[14px] font-semibold ">{topLevelComment.snippet.authorDisplayName}</li>
          <li className="text-[14px]">{topLevelComment.snippet.textDisplay}</li>

        </ul>
      </div>
    </div>

  )
}

export default Comments;