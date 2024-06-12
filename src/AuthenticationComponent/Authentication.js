import { Navigate } from "react-router-dom";
import { useState,useEffect } from "react";

function Authentication()
{
    const [status,setStatus]=useState(0);

    useEffect(()=>{
        var path = window.location.pathname;
        // console.log(path);
        if(path!="/"&& path!="/about"&& path!="/contact"&&path!="service"&&path!="/register"&&path!="/login")
        {
            if(localStorage.getItem('token')==undefined)
            setStatus(1);
        
        }
    },[]);
    return(
        <>
        {status== 1 &&
        <Navigate to ='/login'/>
        }
        </>
        
    )
}

export default Authentication;