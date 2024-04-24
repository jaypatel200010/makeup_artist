import React from "react";
import Aheader from "../Components/Aheader";
import Afooter from "../Components/Afooter";

function Manage_blog() {
  return (
    <>
      <div>
        <Aheader title={"Manage-blogs"} />
        <div className="container mt-5">
          <h2>Manage Blogs</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Blog</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>id</td>
                <td>Title</td>
                <td>Blog</td>
                <td>Image</td>
                <td>
                  <button className="btn btn-sm btn-primary">Edit</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>

              {/* Add more rows for additional appointments as needed */}
            </tbody>
          </table>
        </div>
        <Afooter />
      </div>
    </>
  );
}

export default Manage_blog;
