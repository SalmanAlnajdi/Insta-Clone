import React from 'react'
import { FcLike } from "react-icons/fc";
import { useState } from 'react';
const Post = ({
    image, postTitle , postDes , likes
}) => {

    const [conut , setConut] = useState(0);

    const addOne = ()=>{
      return setConut(conut +1 );
    }
    
  return (
    <div className='post'>
        <div className='img-box'>
            <img  src={image}/>

        </div>
        <div className='text-box'>

        <h3 >
            {postTitle} 
        </h3>

        <h5>
            {postDes}
        </h5>
        </div>

        <div className='like-box'>
            <p> <FcLike/>  {conut} likes </p>
            <button onClick={addOne} >Like</button>
            
        

        </div>

    </div>
  )
}

export default Post