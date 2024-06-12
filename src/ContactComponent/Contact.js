// import "./Contact.css";

function Contact() {
  return (
      <div className="about mt-0">
        <div className="container ">
          <div className="row">
            <div className="col-md-6">
              <div className="titlepage">
                <h2>contact page</h2>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </span>
                <a className="btn read_more" href="Javascript:void(0)">
                  Read More
                </a>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="about_img">
                <div className="col" id="bg">
                  <form className="border p-5 bg-light fs-6 fw-bold text-start">
                  <h1 className="fs-1 text-center fw-bolder">Contact US</h1>
                    <div classNameName="form-group  mb-3">
                      <label className="form-label">Name: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="ENTER NAME"
                      ></input>
                    </div>

                    <div className="form-group mb-3">
                      <label className="form-label">Email: </label>
                      <input
                        className="form-control"
                        placeholder="Enter Email"
                      ></input>
                    </div>

                    <div className="form-group mb-3">
                      <label classNameName="form-label">Contact: </label>
                      <input
                        className="form-control"
                        placeholder="Enter  Password"
                      ></input>
                    </div>

                    <div className="form-group mb-3">
                       <label className="font"> Message: </label>
                      <textarea
                        className="form-control "
                        placeholder="Enter Message"
                      ></textarea>
                    </div>
               <div className="form-group text-center">
                 <button className=" btn btn-success read_more">Submit</button>
               </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}
export default Contact;
