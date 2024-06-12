import './EPAdmin.css';
import { useState ,useEffect} from 'react';
import axios from 'axios';
import { _userapiurl } from '../ApiUrl';

function EPAdmin()
{
   const [output ,setOutput] =useState();
   const [name ,setName] =useState();
   const [email ,setEmail] =useState();
   const [password ,setPassword] =useState();
   const [mobile ,setMobile] =useState();
   const [address ,setAddress] =useState();
   const [city ,setCity] =useState();
   const [gender ,setGender] =useState();
  //  const [userDetails , setUserDetails ] =useState([]);
      
   useEffect(()=>{
        var email = localStorage.getItem("email");
         axios.get(_userapiurl+"fetch?email="+email).then((response)=>{
            // setUserDetails(response.data);
            // console.log(response.data[0]);
            var adminDetails=response.data[0];
            setName(adminDetails.name);
            setEmail(adminDetails.email);
            setPassword(adminDetails.password);
            setCity(adminDetails.city);
            setAddress(adminDetails.address);
            setMobile(adminDetails.mobile);
         }).catch((err)=>{
            console.log(err);
         });
      },[]);

 
const handleSubmit=(evt)=>{
   evt.preventDefault();

  var updateDetails={"condition":{"email":email},"set":{"name":name,"email":email,"password":password,"mobile":mobile,"address":address,"city":city,"gender":gender}}

  axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
    //  console.log(response);
    setOutput("Profile Edited Successfully......");
  }).catch((err)=>{
    console.log(err);
  });
};
 return(
        <div>
             <div className="about mt-0">
         <div className="container ">
            <div className="row">
              
               <div className="col-md-6">
                  <div className="titlepage">
                   <font style={{"color":"blue"}}>{output}</font>
                   <form onSubmit={handleSubmit} className='border p-5 fs-4 fw-bolder bg-light'>
                   <h2 className='text-center mb-3'> Edit Profile!!</h2>
                     <div className="form-group mb-3">
                        <label for="name">Name:</label>
                        <input type="text" className="form-control" value={name} onChange={e =>setName(e.target.value)}></input>
                     </div>
                   <div className="form-group">
                     <label for="email">Email address:</label>
                   <input type="email" className="form-control" value={email} onChange={e =>setEmail(e.target.value)} readOnly></input>
                   </div>
                   <div className="form-group">
                     <label for="pwd">Password:</label>
                   <input type="password" className="form-control" value={password} onChange={e =>setPassword(e.target.value)}></input>
                   </div>
                   <div className="form-group">
                     <label for="mobile">Mobile:</label>
                   <input type="text" className="form-control" value={mobile} onChange={e =>setMobile(e.target.value)}></input>
                   </div>
                   <div className="form-group">
                     <label for="address">Address:</label>
                   <input type="text" className="form-control" value={address} onChange={e =>setAddress(e.target.value)}></input>
                   </div>
                   <div className="form-group">
                     <label for="city">City:</label>
               <select  className="form-control" value={city} onChange={e =>setCity(e.target.value)}>
                     <option>Select City</option>
                     <option>Indore</option>
                     <option>Dewas</option>
                     <option>Sonkatch</option>
                     <option>Ujjain</option>
                     <option>Bhopal</option>
               </select>
                   </div>
                   <div className="form-group mb-3">
                     <label for="gender">Gender:</label>
                      Male <input checked type="radio" value="male" name="gender"
                       onChange={e => setGender(e.target.value)}></input>
                       &nbsp;&nbsp;
                     Female <input type="radio" value="female" name="gender"
                       onChange={e => setGender(e.target.value)}></input>
                        &nbsp;&nbsp;
                   </div>
                  <div className='form-group text-center mt-3'>

                   <button type="submit" className="btn btn-success">Submit</button>
                  </div>
                  
                   </form> 
                  </div>
               </div>
               <div className="col-md-6 text-center">
                     <h1 className='fs-1 fw-bolder ' >Thank You</h1>
                <p className='fs-4 text-start fw-bold'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco
                </p>
               </div>
            </div>
         </div>
      </div>
      {/* Register end */}
   </div>
    );
}
export default EPAdmin;
