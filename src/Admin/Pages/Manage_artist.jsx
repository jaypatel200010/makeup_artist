import React from "react";
import Aheader from "../Components/Aheader";
import Afooter from "../Components/Afooter";

function Manage_artist() {
  return (
    <>
      <div>
        <Aheader title={"Manage-artist"} />
        <div className="container mt-5">
          <h2>Manage Artist</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Profile</th>
                <th>Title</th>
                <th>Address</th>
                <th>Ammount</th>
                <th>Venue</th>
                <th>Airbrush</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Profile</td>
                <td>Title</td>
                <td>Address</td>
                <td>Amount</td>
                <td>Venue</td>
                <td>Airbrush</td>
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

export default Manage_artist;
