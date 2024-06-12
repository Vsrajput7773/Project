import './Service.css';

function Service()
{
    return(
        <div>
 {/* our plane */}
 <div className="plane">
 <div className="container">
    <div className="row">
       <div className="col-sm-12">
          <div className="titlepage">
             <h2>Our Plane</h2>
             <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t dolor in reprehenderit in voluptate </span>
          </div>
       </div>
    </div>
    <div className="row">
       <div className="col-md-4">
          <div className="plan_bax text_align_center">
             <figure><img src="assets/images/b2.jpeg" alt="#"/></figure>
             <div  id="ho_plan" className="plan_text">
                <h3>LIGHT DECORATIONS</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t dolor in reprehenderit in voluptate </p>
                <a className="read_more" href="Javascript:void(0)">Read More</a>
             </div>
          </div>
       </div>
       <div className="col-md-4">
          <div className="plan_bax text_align_center">
             <figure><img src="assets/images/b3.jpeg" alt="#"/></figure>
             <div  id="ho_plan" className="plan_text">
                <h3>FLOWER RESTAURANT</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t dolor in reprehenderit in voluptate </p>
                <a className="read_more" href="Javascript:void(0)">Read More</a>
             </div>
          </div>
       </div>
       <div className="col-md-4">
          <div className="plan_bax text_align_center">
             <figure><img src="assets/images/plan_img1.jpg" alt="#"/></figure>
             <div  id="ho_plan" className="plan_text">
                <h3>SPACIAL PARTY</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t dolor in reprehenderit in voluptate </p>
                <a className="read_more" href="Javascript:void(0)">Read More</a>
             </div>
          </div>
       </div>
    </div>
 </div>
</div>
{/* our plane */}

</div>
    );
}
export default Service;
