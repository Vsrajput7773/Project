import "./Manageusers.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { _userapiurl } from "../ApiUrl";

function Manageusers() {
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    axios
      .get(_userapiurl + "fetch?role=user")
      .then((response) => {
        const responseData=response.data;
      //   console.log(responseData);
        setUserDetails(responseData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const ManageUserStatus = (_id, s) => {
    // alert(_id+"-------"+s);
    if (s == "verify") {
      axios
        .patch(_userapiurl + "update", { _id: _id, status: 1 })
        .then((result) => {
          window.location.reload();
        });
    } else if (s == "block") {
      axios
        .patch(_userapiurl + "update", { _id: _id, status: 0 })
        .then((result) => {
          window.location.reload();
        });
    } else {
      axios.delete(_userapiurl + "delete/" + _id).then((result) => {
        window.location.reload();
      });
    }
  };

  return (
    <div className="about mt-0">
      <div className="container ">
        <div className="row d_flex">
          <div className="col-md-12">
            <div className="titlepage">
              <center>
                <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
                  view & Manage user Details
                </h1>
                <table className="table table-bordered">
                  <tr>
                    <th>UserID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Mobile</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Gender</th>
                    <th>Info</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                  {userDetails.map((row) => (
                    <tr>
                      <td>{row._id}</td>
                      <td>{row.name}</td>
                      <td>{row.email}</td>
                      <td>{row.password}</td>
                      <td>{row.mobile}</td>
                      <td>{row.address}</td>
                      <td>{row.city}</td>
                      <td>{row.gender}</td>
                      <td>{row.info}</td>

                      <td>
                        {row.status == 0 && (
                          <a
                            style={{ color: "green" }}
                            onClick={() => {
                              ManageUserStatus(row._id, "verify");
                            }}
                          >
                            verify user
                          </a>
                        )}
                        {row.status == 1 && (
                          <a
                            style={{ color: "orange" }}
                            onClick={() => {
                              ManageUserStatus(row._id, "block");
                            }}
                          >
                            Block user
                          </a>
                        )}
                      </td>
                      <td>
                        <a
                          style={{ color: "red" }}
                          onClick={() => {
                            ManageUserStatus(row._id, "delete");
                          }}
                        >
                          Delete user
                        </a>
                      </td>
                    </tr>
                  ))}
                </table>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Manageusers;
