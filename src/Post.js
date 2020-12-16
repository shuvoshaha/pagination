import React from 'react'

const Post = ({ posts, loading }) => {
 if(loading){
  return <h2>Loading...</h2>
 }

 return (
  <>
   <ul className="posts">
    {posts.map( posts => (
     <li key={posts.id}> {posts.id} | {posts.title} </li>
    ) )}
   </ul>
  </>
 )
}

export default Post;
