import './Addproduct.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _categoryapiurl, _subcategoryapiurl, _productapiurl } from '../ApiUrl';

function Addproduct() {
    const [file, setFile] = useState();
    const [catName, setCatName] = useState();
    const [subcatName, setSubCatName] = useState();
    const [productName, setProductName] = useState();
    const [productTittle, setProductTittle] = useState();
    const [productbasePrice, setProductBasePrice] = useState();
    const [output, setOutput] = useState();
    const [cDetails, setCategoryDetails] = useState([]);
    const [scDetails, setSubCategoryDetails] = useState([]);


    useEffect(() => {
        setInterval(() => {
            axios.get(_categoryapiurl + "fetch").then((result) => {
                //console.log(result.data);
                setCategoryDetails(result.data);
            });
        }, 1000);
    }, []);

    useEffect(() => {
        setInterval(() => {
            axios.get(_subcategoryapiurl + "fetch").then((result) => {
                //console.log(result.data);
                setSubCategoryDetails(result.data);
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
        formData.append('productnm', productName);
        formData.append('producticon', file);
        formData.append('prodittle', productTittle);
        formData.append('prodprice', productbasePrice);
        const config = {
            'content-type': 'multipart/form-data'
        };
        axios.post(_productapiurl + "save", formData, config).then((response) => {
            setCatName("");
            setSubCatName("");
            setProductName("");
            setProductTittle("");
            setProductBasePrice("");
            setOutput("Product Added Successfully...");
        });
    }

    return (
        <div className='Addproduct layout' >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>Add Sub Category</h1>
                        <font color="blue">{output}</font>
                        <form onSubmit={handleSubmit}>
                            <label>Category Name:</label>
                            <select value={catName}
                                onChange={e => setCatName(e.target.value)}>
                                <option>Select Category</option>
                                {
                                    cDetails.map((row) => (
                                        <option>{row.catname}</option>
                                    ))
                                }
                            </select>
                            <br /><br />

                            <label>Sub Category Name:</label>
                            <select value={subcatName}
                                onChange={e => setSubCatName(e.target.value)}>
                                <option>Select Category</option>
                                {
                                    scDetails.map((row) => (
                                        <option>{row.subcatname}</option>
                                    ))
                                }
                            </select>
                            <br /><br />

                            <label>Product Name: </label>
                            <input type="text" value={productName}
                                onChange={e => setProductName(e.target.value)}></input>
                            <br /><br />

                            <label>Product Icon:</label>
                            <input type="file"
                                onChange={handleChange} ></input>
                            <br /><br />

                            <label>Product Tittle: </label>
                            <textarea type="text" value={productTittle}
                                onChange={e => setProductTittle(e.target.value)}></textarea>
                            <br /><br />

                            <label>Product Base Price :</label>
                            <input type="text" value={productbasePrice}
                                onChange={e => setProductBasePrice(e.target.value)} ></input>
                            <br /><br />


                            <input type="submit" value="Add Product" className="btn btn-success"></input>
                        </form>
                        <br /><br />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Addproduct;