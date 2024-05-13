
import './App.css';
import Post from './components/Post';

function App() {
 
  const posts = [
    {
      image : "https://c02.purpledshub.com/uploads/sites/62/2022/07/GettyImages-94781378-0d2ac4d.jpg",
      postTitle : "Sea Shell",
      postDes : "Sea ............ ",
      likes : 291
    },
    {
      image : "https://www.nwf.org/-/media/NEW-WEBSITE/Shared-Folder/Wildlife/Invertebrates/invertebrate_octopus_600x300.jpg",
      postTitle : "Octopus",
      postDes : "Sea World............ ",
      likes : 109
    },
    {
      image : "https://www.seacoastonline.com/gcdn/presto/2021/07/14/NPOH/32c7c45d-5abc-49e5-aa81-71633454f748-greatwhiteshark.jpg?width=1200&disable=upscale&format=pjpg&auto=webp",
      postTitle : "White Shark",
      postDes : "Sea ............ ",
      likes : 504
    },
    {
      image : "https://www.whalingmuseum.org/wp-content/uploads/2020/09/Hero.jpg",
      postTitle : "Blue Whale",
      postDes : "Sea ............ ",
      likes : 399
    },
    {
      image : "https://www.thoughtco.com/thmb/H76ZaM54-H4XYjYxMyi2LpP31sE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-552097471-7e00923b6e4d492f876db869379b193c.jpg",
      postTitle : "Jellyfish",
      postDes : "Sea World ............ ",
      likes : 654
    }
  ]

  const postList = posts.map((post)=>{
    return <Post image={post.image} postTitle={post.postTitle} postDes={post.postDes} likes={post.likes}/>
      
  })

  return (
    <div className="App">
      <h1>My cool Instegram clone</h1>
      <div className='posts-container'>

          {postList}
      </div>
    </div>
  );
}

export default App;
