import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
        <div className="container-fluid">
            <div className="row bg-danger text-white">
                <div className="col-lg-4">Season Sale & Fresh Arrivals Are Here, Take A Look Now !</div>
                <div className="col-lg-5"></div>
                <div className="col-lg-3 ">
                    <img className='image' src="https://img.icons8.com/stickers/2x/facebook-new.png" alt="" width="20px" />
                    <img  className='image' src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="" width="20px" />
                    <img  className='image' src="https://cdn-icons-png.flaticon.com/128/160/160194.png" alt="" width="20px" />
                    <img className='image'src="https://cdn-icons-png.flaticon.com/128/1077/1077046.png" alt="" width="20px" />
                    <img className='image'src="https://img.icons8.com/fluency/2x/skype-for-business.png" alt="" width="20px" />
                    <img className='image'src="https://img.icons8.com/ios/2x/video-conference.png" alt="" width="20px" />
                </div>
            </div>

            <div className="row m-2">
              {/* SuperMarket Logo */}
              <div className="col-lg-3">
                <img src="https://wpthemes.themehunk.com/bigstore-marketplace/wp-content/uploads/sites/168/2021/02/logo.png" alt="" />
              </div>

              {/* Navbar/ manu */}
              <div className="col-lg-6">
                  <nav className="navbar navbar-expand-lg text-white ">
                    <div className="container-fluid">
                     
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                      </button>
                      <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                          <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link >
                          </li>
                          <li className="nav-item">
                            <Link  className="nav-link" to="/Shop">Shop</Link >
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="FurnitureMain">Furniture</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link " to="FashionCloths">Fashion & Clothing</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link " to="/Contact">Contact Us</Link>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/DataCollection">Data collection</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>


              </div>
              {/* Contact/ headphone image */}
              <div className="col-lg-3">
                <div className="row">
                    <div className="col-lg-4 m-2">
                      <img className='image2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT__-PVoW0BZ9hOHyLVFsVVtBptCUcFLT-_YA&usqp=CAU" alt=""  width="50px"/>
                    </div>
                    <div className="col-lg-6">
                    CALL US 24x7
+1800090098
                    </div>
                </div>
              </div>
            </div>

            <div className="row bg-light p-2">
              <div className="col-lg-4">
                <img src="https://cdn-icons-png.flaticon.com/512/60/60510.png" alt="" width="20px" /> &nbsp; Category

              </div>
              <div className="col-lg-5 ">
                            <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  name="search_query" />
                    <button className="btn btn-outline-success bg-danger" type="submit">Search</button>
                  </form>

              </div>
              <div className="col-lg-3 ">
                <img className='image1' src="https://cdn-icons-png.flaticon.com/128/565/565310.png" alt="" width="30px" />
                <img className='image1' src="https://cdn-icons-png.flaticon.com/128/565/565308.png" alt="" width="30px" />
                <img className='image1' src="https://cdn-icons-png.flaticon.com/128/565/565338.png" alt="" width="30px" />
              </div>
            
            </div>
        </div>
    </div>
  )
}
