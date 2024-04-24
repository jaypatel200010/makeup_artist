import React from "react";
import Aheader from "../Components/Aheader";
import Afooter from "../Components/Afooter";

function Manage_contact() {
  return (
    <>
      <div>
        <Aheader title={"Manage-contacts"} />
        <div className="container mt-5">
          <h2>Manage Contacts</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Subject</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Mobile</td>
                <td>Subject</td>
                <td>Message</td>
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

export default Manage_contact;
