import './About.css';
function About() {
   return (
         <div className="about mt-0">
            <div className="container ">
               <div className="row d_flex">
                  <div className="col-md-5">
                     <div className="titlepage">
                        <h2>About Our Company</h2>
                        <span>Hello and Welcome to Event.com
                           Best Event planer and Decoration services  </span>
                        <a className="read_more" href="/ReadMore"> Read More</a>
                     </div>
                  </div>
                  <div className="col-md-7">
                     <div className="about_img">
                        <figure><img src="assets/images/b1.jpeg" alt="#" /></figure>
                     </div>
                  </div>
               </div>
            </div>
         </div>
   );
}
export default About;
