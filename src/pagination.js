import React from 'react'

const Pagination = ({ postPerpage, totalPosts, paginate }) => {

 let pageNumber = [];
 for(let i = 1; i <= Math.ceil(totalPosts / postPerpage); i++){
  pageNumber.push(i);
 }

 return (
  <>
   <ul className="pagination">
    {pageNumber.map( number => (
     <li onClick={ () => paginate(number) } key={number}> <a href="!#">
       {number}
      </a> </li>
    ) )}
   </ul>
  </>
 )
}

export default Pagination;
