import Homepage from './Components/Homepage';
import AddBooks from './Components/AddBooks';
import Booklist from './Components/Booklist';
import ViewBooks from './Components/ViewBooks';
import './App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Components/home.css';
function App() {
  return (
    <BrowserRouter>
      <div className='container-fluid'>
        <div className='row'>

          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <Link className="navbar-brand" to={"#"}> <i className="bi bi-book-half" style={{ marginRight: '8px' }}></i><span>E-Library</span></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={"/"}><i className="bi bi-house-door-fill" style={{ marginRight: '8px' }}></i>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/Booklist"}> <i className="bi bi-book" style={{ marginRight: '8px' }}></i>Books List</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/AddBooks"}><i className="bi bi-plus-square-dotted" style={{ marginRight: '8px' }}></i>Add Books</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/ViewBooks"}><i className="bi bi-view-list" style={{ marginRight: '8px' }}></i>View Books</Link>
                  </li>

                </ul>

              </div>
            </div>
          </nav>

          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/AddBooks' element={<AddBooks />} />
            <Route path='/Booklist' element={<Booklist />} />
            <Route path='/ViewBooks' element={<ViewBooks />} />


          </Routes>


        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
