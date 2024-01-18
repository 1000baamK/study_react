import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "홍길동",
        comment: "하이하이, 호잇!"
    },
    {
        name: "도라에몽",
        comment: "진구야 일어나~"
    },
    {
        name: "짱구",
        comment: "훌라훌라 훌라후프"
    }
];

function CommentList(props){
    return(
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })};
        </div>
    );
}

export default CommentList;