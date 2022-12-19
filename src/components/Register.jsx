import React from "react";
export default function Register() {
  return (
    <div className="container">
      <div className="row justify-content-md-center mt-4">
        <div className="col-lg-5 card border-primary mb-3">
          <div className="card-header h4 text-center">Register an Account</div>
          <div className="card-body">
            <div className="form-group">
              <label className="col-form-label mt-4" for="inputDefault">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Username"
                id="inputDefault"
              />
            </div>

            <div className="form-group">
              <label className="col-form-label mt-4" for="inputDefault">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Email"
                id="inputDefault"
              />
            </div>

            <div className="form-group">
              <label className="col-form-label mt-4" for="inputDefault">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Your Password"
                id="inputDefault"
              />
            </div>

            <div className=" row justify-content-md-center form-group mt-4">
              <button
                type="button"
                className="col-sm-6 btn btn-outline-secondary center"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
