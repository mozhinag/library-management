import React from 'react'

function ViewBooks() {
  return (
    <div> <div className="container mt-4">
    <h2>Book Records</h2>
    <table className="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">ISBN</th>
                <th scope="col">Publication Date</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
         
            <tr>
                <th scope="row">1</th>
                <td>Book Title 1</td>
                <td>Author 1</td>
                <td>ISBN1234567890</td>
                <td>2022-01-01</td>
                <td>
    <button onClick={() => { /* Define your exposure action here */ }} style={{ border: 'none', background: 'none' }}>
        <i className="bi bi-exposure fs-3" style={{ color: 'blue' }}></i>
    </button>
    <button onClick={() => { /* Define your delete/trash action here */ }} style={{ border: 'none', background: 'none', marginLeft: '8px' }}>
        <i className="bi bi-trash3 fs-3" style={{ color: 'red' }}></i>
    </button>
</td>

            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Book Title 2</td>
                <td>Author 2</td>
                <td>ISBN0987654321</td>
                <td>2022-02-01</td>
                <td>
    <button onClick={() => { /* Define your exposure action here */ }} style={{ border: 'none', background: 'none' }}>
        <i className="bi bi-exposure fs-3" style={{ color: 'blue' }}></i>
    </button>
    <button onClick={() => { /* Define your delete/trash action here */ }} style={{ border: 'none', background: 'none', marginLeft: '8px' }}>
        <i className="bi bi-trash3 fs-3" style={{ color: 'red' }}></i>
    </button>
</td>

            </tr>
           
        </tbody>
    </table>
</div>

</div>
  )
}

export default ViewBooks