import React from "react";
import Comments from "./Comments";


const CommentsList = ({ comments }) => {
    return comments?.map((comment, i) => (
        <div>
            {/* <Comments key={i} CommentsData={comment} /> */}

            {/* <div className="pl-5 border border-l-red ml-5">

                <CommentsList comments={comment.replies} />

            </div> */}

            <Comments key={i} CommentsData={comment} />

        </div>
    ))


}


export default CommentsList;

