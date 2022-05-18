import React from 'react'

function Votes({upvotes,downvotes,handleUpVotes,handleDownVotes}){
    function handleClick1(event){
        handleUpVotes(event.target)
    }
    function handleClick2(event){
        handleDownVotes(event.target)
    }
   

    
    return(
    <div>
        <button onClick={handleClick1}>{upvotes}</button>
        <button onClick={handleClick2}>{downvotes}</button>
    </div>
    )
}

export default Votes;
