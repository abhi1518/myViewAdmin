import React, { useEffect, useState } from "react";
import adminLayout from "../hoc/adminLayout";
import { blogComment } from "../api";

function BlogComment() {
  const [userData, setUserData] = useState([]);

  const handleSubmit = async (event) => {
    try {
      const result = await blogComment();
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
            <h5 className="pb-2 mb-0">All Blog Comment List</h5>
          </div>
        </div>
        <div className="d-flex text-muted">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>User Id</th>
                <th>Name</th>
                <th>Blog Id</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((row) => (
                <tr key={row.id}>
                 <td>{row.id}</td>
                  <td>{row.userid}</td>
                  <td>{row.name}</td>
                  <td>{row.blogid}</td>
                  <td>{row.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default adminLayout(BlogComment);
