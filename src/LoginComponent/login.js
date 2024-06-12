// import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { _userapiurl } from '../ApiUrl';
import { useNavigate } from 'react-router-dom';
import ReadMore from '../ReadMore/readmore';
function Login()
{
   const navigate = useNavigate();
   const [output ,setOutput] =useState();
   const [email ,setEmail] =useState();
   const [password ,setPassword] =useState();
 
const handleSubmit=(evt)=>{
   evt.preventDefault();

   if(email==undefined)
   setOutput(alert("*Email is required"))
else if(password==undefined)
setOutput(alert("*Password is required"))
else
{
   let userDetails ={"email":email,"password":password};
   // console.log(usesrDetails);
  
   axios.post(_userapiurl+"login",userDetails).then((response)=>{
   if(response.data.token!="error")
   {
   const responseData=response.data.userDetails;

     localStorage.setItem("token",response.data.token);
     localStorage.setItem("_id",responseData._id);
     localStorage.setItem("name",responseData.name);
     localStorage.setItem("email",responseData.email);
     localStorage.setItem("password",responseData.password);
     localStorage.setItem("mobile",responseData.mobile);
     localStorage.setItem("address",responseData.address);
     localStorage.setItem("city",responseData.city);
     localStorage.setItem("gender",responseData.gender);
     localStorage.setItem("role",responseData.role);
     localStorage.setItem("info",responseData.info);

      // if(responseData.role=="admin")
      // setOutput("login success as admin");
      // else  
      // setOutput("login success as user");
      responseData.role=="admin"?navigate("/admin"):navigate("/user");
   }
else
{
   setOutput(alert("Invalid user or verify your account"));
   setEmail('');
   setPassword('');
}
 }).catch((err)=>{
    console.log(err);
  });
}
};
    return(
        <div>
            {/* Login start */}

             <div className="about mt-0">
         <div className="container ">
            <div className="row">
               <div className="col-md-6">
                  <div className="titlepage">
                  {/* {alert({output})} */}
                   {/* <font style={{"color":"blue"}}>{output}</font> */}
                   <form onSubmit={handleSubmit} className='bg-light mt-5 p-5 fs-5 fw-bolder' >
                  <h2 className='text-center'>Login Here!!!</h2>
                   
                   <div className="form-group mt-5 ">
                     <label for="email">Email address:</label>
                   <input type="email" className="form-control" value={email} onChange={e =>setEmail(e.target.value)} placeholder='Email@.com'></input>
                   </div>
                   <div className="form-group mt-4">
                     <label for="pwd">Password:</label>
                   <input type="password" className="form-control" placeholder='Enter Password' value={password} onChange={e =>setPassword(e.target.value)}></input>
                   </div>
               <div className='form-group text-center'>

                   <button type="submit" className="btn read_more mt-5">Submit</button>
               </div>
                   </form> 

                  </div>
               </div>
               
               <div className="col-md-6">
                  <div className="titlepage p-5">
                     <h2>Login</h2>
                     <span>At Event.com, we believe that every moment is an opportunity to create lasting memories. Whether you're a social butterfly, a culture enthusiast, or an adventure seeker, we've got the perfect events lined up for you.

</span>
                     <a className="read_more" href={ReadMore}> Read More</a>
                 {/* <button className="read_more" onClick={ReadMore}>Read More</button> */}
                  </div>
               </div>
            </div>
         </div>
      </div>
            {/* Login end */}

        </div>
    );
}
export default Login;
