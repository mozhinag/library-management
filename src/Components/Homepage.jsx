import React from 'react'
// import { Link } from 'react-router-dom'
// import Booklist from './Booklist';
import './home.css';
function Homepage() {
  return (
    <>
{/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to={"#"}> <i class="bi bi-book-half"style={{ marginRight: '8px'} }></i><span>E-Library</span></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page"to={"/"}><i class="bi bi-house-door-fill"style={{ marginRight: '8px'} }></i>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"/Booklist"}> <i class="bi bi-book"style={{ marginRight: '8px'} }></i>Books List</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"/AddBooks"}><i class="bi bi-plus-square-dotted"style={{ marginRight: '8px'} }></i>Add Books</Link>
        </li>
        
      </ul>

    </div>
  </div>
</nav>
<Booklist/> */}
<div className='title'>
  LIBRARY MANAGEMENT SYSTEM
</div>

</>

  )
}

export default Homepage