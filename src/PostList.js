import postData from "./data/PostData"
import Post from "./components/Post"
import './App.css';




  function PostList() {


    const postList = postData.map((post)=>{
        return <Post image={post.image} postTitle={post.postTitle} postDes={post.postDes} likes={post.likes}/>
          
      })

    return(
    
    
        <>
        <h1>My cool Instagram clone</h1><div className='posts-container'>

            {postList}
        </div>
        </>
      
)

    

  }


   export default PostList
