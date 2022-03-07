import React from 'react'
import './Home.css'
import Services from './Services';
import Banner from './banner/banner.jpg'
import Footer from './Footer';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <div className="banner">
        <div className="shimmer"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5 className="brand_title">EDUPROV</h5>
              <h1 className="banner_title">Online Bootcamp</h1>
              <h2 className="banner_subtitle">
                Online Web Development , Digital Marketing Training <br /> in
                Bangalore
              </h2>
              <Link to="/application">
                <button className=" banner_title_button btn btn-success btn-lg">
                  APPLY NOW
                </button>
              </Link>
            </div>
            <div className="col-md-6">
              <img src={Banner} className="banner_img" />
            </div>
          </div>
        </div>
      </div>
      <Services />
      <Footer />
    </>
  );
}

export default Home