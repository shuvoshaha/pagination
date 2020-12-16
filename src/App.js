import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './pagination'
import Post from './Post'


const App = () => {
 const [post, setPost ] = useState([]);
 const [loading, setLoading] = useState(false);
 const [currentPage, setCurrentPage] = useState(1)
 const [postPerPage] = useState(5)
 
 // Get the value with RESTful API
 useEffect(() =>{
   const fetchData = async ()=>{
     setLoading(true);
     const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
     setPost(res.data);
     setLoading(false);
   }
   fetchData()

 }, [])
//  console.log(post)

 // Pagination Calculation
 const indexOfLastPage = currentPage * postPerPage;
 const indexOfFristPage = indexOfLastPage - postPerPage;
 const currentPost = post.slice(indexOfFristPage, indexOfLastPage);

 // Function for post per page
const paginates = (pageNumber) => {
 setCurrentPage(pageNumber)
}

console.log(currentPage)

  return (
    <div className="container">
      <h1>Blog</h1>
      <div className="post-title">
        <Post posts={currentPost} loading={loading} />
        <Pagination 
          postPerpage={postPerPage} 
          totalPosts={post.length} 
          paginate={paginates} 
        />
      </div>
    </div>
  );
}

export default App;
