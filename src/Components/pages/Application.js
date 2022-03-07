import React from 'react'
import FormBanner from './images/contactform.jpg'
import './Application.css'

const Application = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-5 py-5">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 ">
                  <img src={FormBanner} className="contactform_banner" />
                </div>
                <div className="col-md-6">
                  <h3 className="fs-5 form_title">APPLICATION FORM</h3>
                  <div className="row form-group ">
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="input"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="input"
                        placeholder="Mobile No"
                      />
                    </div>
                  </div>
                  <div className="row form-group mt-4">
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="input"
                        placeholder="Email ID"
                      />
                    </div>
                    <div className="col-md-4">
                      <select className="selectable">
                        <option>Select Course</option>
                        <option>Frontend development</option>
                        <option>Backend development</option>
                        <option>JavaScript Course</option>
                        <option>ReactJS Course</option>
                        <option>MYSQL DB Course</option>
                      </select>
                    </div>
                  </div>
                  <div className="row form-group mt-4">
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="input"
                        placeholder="Country"
                      />
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="input"
                        placeholder="State"
                      />
                    </div>
                  </div>
                  <div className="row form-group mt-4">
                    <div className="col-md-4">
                      <input type="text" className="input" placeholder="City" />
                    </div>
                  </div>
                  <div className="row form-group mt-4">
                    <div className="col-md-4">
                      <button className='form_btn'>SUBMIT</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Application