// import './Content.css';

function Content()
{
    return(
     <div className="about mt-0">
         <div className="container ">
            <div className="row d_flex">
               <div className="col-md-6">
                  <div className="titlepage">
                     <h2>Home page</h2>
                     <br></br>
                     <p>
                        <h3>Hello Friends , Welcome to Event.com 
                        we are the best Event planer and decorater.
                        </h3>
                      </p>
                     <a className="read_more" href="/ReadMore"> Read More</a>
                  </div>
               </div>
               <div className="col-md-6 ">
                  <div className="about_img">
                     <figure><img classNameName='img-fluid ' src="assets/images/b1.jpeg" alt="#"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
    


    );
}
export default Content;