import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessBoard } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from "react-router-dom";

export const Aboutus = () => {
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
            <div className="jumbotron jumbotron-fluid mt-4" style={{ backgroundColor: 'white', color: 'black', position: 'relative' }}>
                <div className="bar bar-left"></div>
                    <div className="container">
                        <div className="col-md-12 col-lg-6 col-xl-7 mx-auto text-right" style={{ maxWidth: '600px', position: 'relative', zIndex: '1' }}>
                            <h3 className="text-center mb-4" style={{ color: 'black' }}>About us!</h3>
                            <p>Welcome to Ludix, your premier destination for board and card games! At Ludix, we're passionate about providing you with the best gaming experience, with constantly updated content thanks to our active user community. We take pride in being the go-to place for everything related to board and card games.</p>
                            <p>Explore our wide range of games, from timeless classics to exciting recent releases. With detailed reviews, reliable ratings, and a variety of helpful resources, Ludix offers everything you need to discover and enjoy new games. Get ready to dive into a world of fun and strategy with Ludix!</p>
                            <p>At Ludix, we believe that board games are an excellent way to connect with friends, family, and other passionate players. That's why we make it easy to find gaming partners, whether you're organizing a game night at home or looking for local events, through forums and reviews. Find your next exciting match on Ludix!</p>
                            <p>Sign up for Ludix today to access exclusive features, such as adding games to our database, participating in online discussions, and connecting with other players. Your privacy is our priority, so you can enjoy Ludix with complete peace of mind. Join the Ludix community and discover a world of fun in board and card games.</p>
                        </div>
                    </div>
                <div className="bar bar-right"></div>
            </div>
            
                {/* FOOTER */}
            <footer className="bg-black py-4 text-white mt-4">
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
