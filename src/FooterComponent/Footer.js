import './Footer.css';
import { useState , useEffect } from 'react';

function Footer()
{
   const [ FooterContent , setFooterContent ] =useState();

useEffect(()=>{
   setInterval(()=>{
      if(localStorage.getItem("role")=="admin" || localStorage.getItem("role")=="user")
      {
         setFooterContent();
      }
      else
      {
         setFooterContent(
         <div className="contact footer">
         {/*  footer */}

            <div className="container">
               <div className="row">
                  <div className="col-sm-12">
                     <div className="ru_bg">
                        <div className="row">
                           <div className="col-md-3">
                              <a href="index.html"> <img className="logo_fooetr" src="assets/images/b3.jpeg" alt="" /></a>
                           </div>
                           <div className="col-md-9 d-flex align-items-center justify-content-evenly fs-5 fw-bolder">
                                <a href='#'> <i className="fa fa-map-marker" aria-hidden="true"></i> Ujjain ,MP </a>
                                <a href='#'>  <i className="fa fa-volume-control-phone" aria-hidden="true"></i> G(+91) 9755497942 </a>
                                <a href='#'><i className="fa fa-envelope" aria-hidden="true"></i> Event123@gmail.com    </a> 
                                 </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* footer end */}
         </div>
         );
      }
   },2000);
},[]);

    return( 
        <div>
      {FooterContent}
         {/*  copy right start*/}
         <footer>
            <div className="footer">
               <div className="copyright">
                  <div className="container">
                     <div className="row">
                        <div className="col-md-12">
                           <p>©2023-24 All Rights Reserved. <a href="assets/https://html.design/">Decoration & Services</a></p>
                        </div>
                     </div>
                  </div>
               </div>
         {/*copyright  end*/}

            </div>
         </footer>
         </div>
    )
}

export default Footer;
