import React, { useEffect, useState } from "react";
import adminLayout from "../hoc/adminLayout";
import { allContact } from "../api";

function AllContact() {
  const [userData, setUserData] = useState([]);

  const handleSubmit = async (event) => {
    try {
      const result = await allContact();
      console.log(result.data);
      setUserData(result.data);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);
  return (
    <>
      <div className="table-container">
        <div className="row">
          <div className="col">
            <h5 className="pb-2 mb-0">All Contact List</h5>
          </div>
        </div>
        <div className="d-flex text-muted">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone No.</th>
                {/* <th>Address</th> */}
                <th>Pin Code</th>
                <th>Message</th>
                {/* <th>Otp</th> */}
                {/* <th>Created On</th>
                <th>Updated On</th> */}
                <th></th>
              </tr>
            </thead>
            <tbody>
              {userData.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.mobile}</td>
                  {/* <td>{row.address}</td> */}
                  <td>{row.pincode}</td>
                  <td>{row.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* <nav
          className="table-bottom-center-pagination"
          aria-label="Page navigation example "
        >
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav> */}
      </div>
    </>
  );
}

export default adminLayout(AllContact);
