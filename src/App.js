import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
 const [post, setPost ] = useState([]);
 const [loading, setLoading] = useState(false);
 const [currentPagem, setCurrentPage] = useState(1)
 const [postPerPage, setPostPerPage] = useState(10)
 
 useEffect(() =>{
   const fetchData = async ()=>{
     setLoading(true);
     const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
     setPost(res.data);
     setLoading(false);
   }
   fetchData()

 }, [])
 console.log(post)
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
