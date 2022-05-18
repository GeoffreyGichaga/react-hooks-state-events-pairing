import React from "react";

function Comments({comments,dataProp}){
    const displayComments = dataProp.map((data)=>{
        return (
            <>
            <h4>{data.user}</h4>
            <p>{data.comment}</p>
            </>

        )
    })
    return(
        <div>
            <button>Hide Comments</button>
            <hr/>
            <h3>{comments} Comments</h3>
            {displayComments}
            
            
        </div>
    )
}

export default Comments;