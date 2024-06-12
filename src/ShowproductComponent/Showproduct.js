import "./Showproduct.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { _productapiurl, _subcategoryapiurl } from "../ApiUrl";
import { Link, useParams } from "react-router-dom";

function Showproduct() {
  const [spDetails, setShowProductDetails] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(_productapiurl + "fetch?subcatname=" + params.subcatname)
      .then((result) => {
        // console.log(result.data);
        setShowProductDetails(result.data);

      });
  }, []);



  return (
    <div>
      {/* about */}
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* <div className="titlepage"> */}
              <h1 className="fs-1 fw-bolder">Product List!!!</h1>
              <div>
                {spDetails.map((ele) => {
                  const image =
                    "/assets/uploads/producticons/" + ele.producticonname;
                  return (
                    <>
                      <div className="p-2 product">
                        <div
                          className="card product-wh fw-bolder"
                          style={{ width: "19rem" }}
                        >
                          <img className="card-img-top" src={image}  alt="PRODUCT" />
                          <div className="card-body">
                            <h5 className="card-title">
                              Event Name : {ele.productname}{" "}
                            </h5>
                            <p className="card-titel fs-6 mb-2 pruduct-dis">
                              Event Discription : {ele.producttittle}
                            </p>
                            <p className="card-titel">
                              Product id : {ele._id}
                            </p>
                            <p className="card-text">
                              {" "}
                              Event Decoration Rs- :{ele.productprice}
                            </p>
                          </div>
                          <div className="card-title ">
                          <button className="btn btn-success">Booking</button>
                          <button className="btn btn-success" >Add To Card</button>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    //   </div>
  );
}
export default Showproduct;
