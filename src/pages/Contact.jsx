import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessBoard } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from "react-router-dom";

export const Contact = () => {
    return (
        <div>
        {/* NAVBAR */}
        <nav className="navbar bg-dark border-body" data-bs-theme="dark">
                <div className="container-fluid"> 
                    {/* TITLE */}
                    <a className="navbar-brand" href="#">L U D I X _ <FontAwesomeIcon icon={faChessBoard} /></a> 
                    {/*SEARCH */}
                    <div className="d-flex" role="search">
                        <ul className="nav">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                {/* BUTTON SEARCH */}
                                <button className="btn btn-light" type="submit">Search</button>
                            </form>
                            {/* HOME */}
                            <li className="nav-item">
                                <Link to="/home" className="nav-link active text-light" aria-current="page" style={{textDecoration: 'none'}}>Home</Link>
                            </li>
                            {/* GAMES */}
                            <li className="nav-item">
                                <Link to="/games" className="nav-link text-light" style={{textDecoration: 'none'}}>Games</Link>
                            </li>
                            {/* REVIEW */}
                            <li className="nav-item">
                                <Link to="/reviews" className="nav-link text-light" style={{textDecoration: 'none'}}>Reviews</Link>
                            </li>
                            {/* button Logout */}
                            <li className="nav-item">
                                <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
        </nav>
        
        {/* Jumbotron */}    
        <div className="jumbotron jumbotron-fluid mt-4" style={{ backgroundColor: 'white', color: 'black' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://img.freepik.com/fotos-premium/varios-juegos-mesa-tablero-ajedrez-jugando-cartas-domino-sobre-fondo-claro-espacio-texto_287732-404.jpg?w=740" className="img-fluid" alt="Game"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum non error at eos mollitia dignissimos nam optio. Sapiente, quis. Assumenda dolores fugit id, error illo omnis suscipit? Fugit, consequuntur animi.</p>
                    </div>

                <div className="col-md-12 col-lg-6 col-xl-7">
                        <h3 className="text-center mb-4" style={{ color: 'black' }}>Contact us!</h3>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" className="form-control" id="firstName" placeholder="Your Name" />
                        </div>
                        <div className="col">
                            <input type="email" className="form-control" id="email" placeholder="Your Email Address" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" className="form-control" id="subject" placeholder="Subject" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <textarea className="form-control" id="message" rows="6" placeholder="Your Message"></textarea>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button type="button" className="btn btn-secondary btn-lg"> Send </button>
                    </div>
                
                </div>

                </div>
            </div>
        </div>
            
        {/* FOOTER */}
        <footer className="bg-black py-4 text-white mt-2">
            <div className="container">
                <h5><a className="navbar-brand" href="#">L U D I X _ <FontAwesomeIcon icon={faChessBoard} /></a></h5> 
                <Link to="/aboutus" className="nav-link" style={{textDecoration: 'none', color: 'white'}}>About us</Link>
                <Link to="/createby" className="nav-link" style={{textDecoration: 'none', color: 'white'}}>Create by</Link>
                <Link to="/contact" className="nav-link" style={{textDecoration: 'none', color: 'white'}}>Contact</Link>
            </div>
        </footer>
    </div>
    );
}
