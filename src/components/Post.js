import React from 'react'

const Post = ({
    image, postTitle , postDes , likes
}) => {
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
            <p>{likes} likes </p>
            <button>Like</button>
        

        </div>

    </div>
  )
}

export default Post