import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessBoard } from '@fortawesome/free-solid-svg-icons'; 
import { Login } from "./Login";
import { SignIn } from "./SignIn";
import { Aboutus } from "./Aboutus";
import { Createby } from "./Createby";
import { Contact } from "./Contact";
import { Link } from "react-router-dom";

export const Landing = () => {
    return  (
    <div>
          {/* NAVBAR */}
          <nav className="navbar bg-dark border-body" data-bs-theme="dark">
            <div className="container-fluid"> 
              {/* TITLE */}
              <a className="navbar-brand" href="#">L U D I X _ <FontAwesomeIcon icon={faChessBoard} /></a> 
                <ul className="nav">
                  {/* button Login */}      
                    <li className="nav-item">
                      <button type="button" 
                      className="btn btn-dark" 
                      style={{ border: '1px solid white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }} 
                      data-bs-toggle="modal" 
                      data-bs-target="#LoginModal">
                        L o g i n
                      </button>
                    </li>

                    <div style={{ width: '5px' }}></div>

                    {/* button SignIn */}
                    <li className="nav-item">
                      <button type="button" 
                      className="btn btn-dark" 
                      style={{ border: '1px solid white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }} 
                      data-bs-toggle="modal" 
                      data-bs-target="#SignInModal">
                        S u b s c r i b e
                      </button>
                    </li>
                </ul>
            </div>
          </nav>
          {/*CARRUSEL*/}
          <div className="container mt-2"> 
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://st.depositphotos.com/1016676/4017/i/450/depositphotos_40179869-stock-photo-hiker.jpg" className="d-block w-100" alt="imagen1" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://st.depositphotos.com/1016676/4017/i/450/depositphotos_40179869-stock-photo-hiker.jpg" className="d-block w-100" alt="imagen2" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://st.depositphotos.com/1016676/4017/i/450/depositphotos_40179869-stock-photo-hiker.jpg" className="d-block w-100" alt="imagen3" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

          </div>
          
          {/* FOOTER */}
          <footer className="bg-dark py-4 text-white mt-2">
                <div className="container">
                    <h5><a className="navbar-brand" href="#">L U D I X _ <FontAwesomeIcon icon={faChessBoard} /></a></h5> 
                    <Link to="/aboutus" className="nav-link" style={{textDecoration: 'none', color: 'white'}}>About us</Link>
                    <Link to="/createby" className="nav-link" style={{textDecoration: 'none', color: 'white'}}>Create by</Link>
                    <Link to="/contact" className="nav-link" style={{textDecoration: 'none', color: 'white'}}>Contact</Link>
                </div>
          </footer>
          

          {/* MODALES */}
          <div className="modal fade" id="LoginModal" tabIndex="-1" aria-labelledby="exampleLoginModal" aria-hidden="true">
            <Login />
          </div>
          <div className="modal fade" id="SignInModal" tabIndex="-1" aria-labelledby="exampleSignInModal" aria-hidden="true">
            <SignIn />
          </div>     
    </div>
    )
}