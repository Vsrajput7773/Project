import './Register.css';
import { useState } from 'react';
import axios from 'axios';
import { _userapiurl } from '../ApiUrl';

function Register() {
  const [output, setOutput] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [gender, setGender] = useState();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let userDetails = { "name": name, "email": email, "password": password, "mobile": mobile, "address": address, "city": city, "gender": gender };
    // console.log(userDetails);

    axios.post(_userapiurl + "save", userDetails).then((response) => {
      //  console.log(response.data.result);
        setOutput(response.data.result);


      // alert("suceess")
      setName('');
      setEmail('');
      setPassword('');
      setAddress('');
      setCity('');
      setMobile('');
      alert("Its done.......");

    }).catch((err) => {
      console.log(err);
    });
  };
  return (
      <div className="about mt-0">
        <div className="container ">
          <div className="row">
            <div className="col-md-6">
              <div className="titlepage">
               
                <form onSubmit={handleSubmit} className='bg-light p-5 fs-6 fw-bolder  form-cl'>
                <h2 className='text-center'>Register Here!!</h2>
                  <div className="form-group ">
                    <label for="name">Name:</label>
                    <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} required ></input>
                  </div>
                  <div className="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)}></input>
                  </div>
                  <div className="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)}></input>
                  </div>
                  <div className="form-group">
                    <label for="mobile">Mobile:</label>
                    <input type="text" className="form-control" value={mobile} onChange={e => setMobile(e.target.value)}></input>
                  </div>
                  <div className="form-group">
                    <label for="address">Address:</label>
                    <input type="text" className="form-control" value={address} onChange={e => setAddress(e.target.value)}></input>
                  </div>
                  <div className="form-group">
                    <label for="city">City:</label>
                    <select className="form-control" value={city} onChange={e => setCity(e.target.value)}>
                      <option>Select City</option>
                      <option>Indore</option>
                      <option>Dewas</option>
                      <option>Sonkatch</option>
                      <option>Ujjain</option>
                      <option>Bhopal</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="gender">Gender:</label>
                    Male <input type="radio"   value="male" name="gender"
                      onChange={e => setGender(e.target.value)}></input>
                    &nbsp;&nbsp; 
                    Female <input type="radio" value="female" name="gender"
                      onChange={e => setGender(e.target.value)}></input>
                    &nbsp;&nbsp;
                  </div>
                  <div className='form-group text-center mt-4'>
                  <button type="submit" className="btn read_more">Submit</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 p-5 mt-5">
                <font className="fs-1 bg-light " style={{ "color": "green" }}>{output}</font>
              <h1 className='fs-1 fw-bolder text-center'>Thank You</h1>
              <p className='fs-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco 

              </p>
            </div>
          </div>
        </div>
      </div>
  );
}
export default Register;
