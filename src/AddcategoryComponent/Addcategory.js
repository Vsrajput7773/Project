import "./Addcategory.css";
import { useState } from "react";
import axios from "axios";
import { _categoryapiurl } from "../ApiUrl";

function Addcategory() {
  const [file, setFile] = useState();
  const [catName, setCatName] = useState();
  const [output, setOutput] = useState();

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var formData = new FormData();
    formData.append("catnm", catName);
    formData.append("caticon", file);
    const config = {
      "content-type": "multipart/form-data",
    };
    // console.log(formData);
    axios.post(_categoryapiurl + "save", formData, config).then((response) => {
      setCatName("");
      setOutput("Category Added Successfully....");
    });
  };

  return (
    <div className="plane mt-0">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="titlepage">
              <font color="blue">{output}</font>
              <form
                onSubmit={handleSubmit}
                className="border p-4 bg-light fs-4 fw-bolder text-start"
              >
                <h2 className="fs-1 fw-bolder m-2 text-center">Add Category</h2>
                <div className="form-group m-3">
                  <label className="form-label" for="name">
                    Categoty Name :{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control w-50"
                    placeholder="Add Category Name"
                    id="name"
                    value={catName}
                    onChange={(e) => setCatName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-4">
                  <label className="form-lable" for="icon">
                    Category Icon:
                  </label>
                  <input
                    type="file"
                    className="form-control w-50"
                    id="icon"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group text-center">
                  <input
                    type="submit"
                    className="btn btn-success "
                    value="Add Category"
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* our plane */}
    </div>
  );
}
export default Addcategory;
