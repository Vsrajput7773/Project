import './Addsubcategory.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _categoryapiurl, _subcategoryapiurl } from '../ApiUrl';

function Addsubcategory() {
  const [file, setFile] = useState()
  const [catName, setCatName] = useState();
  const [subcatName, setSubCatName] = useState();
  const [output, setOutput] = useState();
  const [cDetails, setCategoryDetails] = useState([]);

  useEffect(() => {
    setInterval(() => {
      axios.get(_categoryapiurl + "fetch").then((result) => {
        //console.log(result.data);
        setCategoryDetails(result.data);
      });
    }, 1000);
  }, []);

  const handleChange = (event) => {
    setFile(event.target.files[0])
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    var formData = new FormData();
    formData.append('catnm', catName);
    formData.append('subcatnm', subcatName);
    formData.append('subcaticon', file);
    const config = {
      'content-type': 'multipart/form-data'
    };
    axios.post(_subcategoryapiurl + "save", formData, config).then((response) => {
      setCatName("");
      setSubCatName("");
      setOutput("SubCategory Added Successfully....");
    });
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <font colorName="blue">{output}</font>
            <form onSubmit={handleSubmit} className='form border p-4 bg-light fs-4 fw-bolder' >
            <h1 className='fs-1 text-center fw-bolder'>Add Sub Category</h1>

              <div className='form-group mb-3'>
                <label className='form-label' for="name" > Category Name : </label>
                <select value={catName} id='name' className='form-control w-50' onChange={e => setCatName(e.target.value)} >
                  <option className='form-control '>Select Category</option>
                  {
                    cDetails.map((row) => (
                      <option>{row.catname}</option>
                    ))
                  }
                </select>
              </div>

              <div className='form-group mb-3'>
                <label className='form-lable'>Sub Category Name:</label>
                <input type="text" className='form-control w-50' value={subcatName}
                  onChange={e => setSubCatName(e.target.value)} />
              </div>

              <div className='form-group mb-3'>
                <label className='form-label'>Sub Category Icon : </label>
                <input type="file" className='form-control w-50' onChange={handleChange} />
              </div>
              <div className='form-group m-3 text-center'>
                <input type="submit" className='btn btn-success' value="Add Sub Category" />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*about section end */}
    </>
  );
}

export default Addsubcategory;
