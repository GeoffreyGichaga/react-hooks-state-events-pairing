import { useState } from "react";
import video from "../data/video.js";
import { VideoFrame } from "./VideoFrame.js";
import Votes from "./Votes.js";
import Comments from "./Comments"

function App() {
  console.log("Here's your data:", video);

  const [upvotes,setUpVotes]=useState(video.upvotes)
  const [downvotes,setDownVotes]=useState(video.downvotes)
  const [commentsLength,setCommentsLength] = useState(video.comments.length)
  console.log(upvotes);

  function handleUpVoting(){
    setUpVotes(upvotes+1)
  }

  function handleDownVoting(){
    setDownVotes(downvotes+1)

  }

  function handleCommentsLength(){
    setCommentsLength(video.comments.length)
  }
  

  



  return (
   <>
    <VideoFrame prop={video}/>
    <Votes handleUpVotes={handleUpVoting} handleDownVotes={handleDownVoting} upvotes={upvotes} downvotes={downvotes}/>
    <br/>

    <Comments comments={commentsLength} dataProp={video.comments}/>
    

    </>
    
  );
}

export default App;
