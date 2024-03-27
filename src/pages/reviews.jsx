import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCog, faUser, faChessBoard } from '@fortawesome/free-solid-svg-icons'; 
import { Login } from './Login';
import { SignIn } from "./SignIn";
import { Link } from "react-router-dom";
import './styles.css';
import CommentSection from './CommentSection'; // Importa el componente CommentSection


export const Reviews = () => {
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

      {/* CAROUSEL */}
      <h2>Cards Against Humanity</h2>
      <div className="text-center">
        
        <img src="src\assets\Cards-Against-Humanity-768x432.webp" className="img-fluid mx-auto" alt="foto juego" />
      </div>

      <div>
        <h2>Comentarios</h2>
        <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium doloremque quos ipsum laudantium tenetur cum vitae distinctio architecto laborum cupiditate facilis sint, natus vel, voluptate, eveniet earum ratione expedita error.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, qui minima odit natus dolore blanditiis, exercitationem quos optio et distinctio repellat accusamus ut molestias, mollitia quas reiciendis? Suscipit, in maxime.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, necessitatibus exercitationem quidem vitae doloremque ipsam asperiores facilis eius quasi, voluptatum harum repudiandae, neque repellat nulla at nisi tempora! Molestiae, animi!
        </p>
      </div>

      {/* Sección de comentarios */}
      <CommentSection />


      <div class="height-100 container d-flex justify-content-center align-items-center">
    
    <div class="card.review p-3">
        <div class="d-flex justify-content-between align-items-center">
            <div class="ratings">
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star"></i>
            </div>
            <h5 class="review-count">12 Reviews</h5>
        </div>
        
        
        <div class="mt-5 d-flex justify-content-between align-items-center">
            <h5 class="review-stat">Cleanliness</h5>
            <div class="small-ratings">
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
            
        </div>
        
        <div class="mt-1 d-flex justify-content-between align-items-center">
            <h5 class="review-stat">Approachability of SLT</h5>
            <div class="small-ratings">
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star"></i>
            </div>
        </div>
        
        
        <div class="mt-1 d-flex justify-content-between align-items-center">
            <h5 class="review-stat">Front Office</h5>
            <div class="small-ratings">
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
        </div>
        
        
        <div class="mt-1 d-flex justify-content-between align-items-center">
            <h5 class="review-stat">CPD</h5>
            <div class="small-ratings">
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star rating-color"></i>
            </div>
        </div>
        
        
        <div class="mt-1 d-flex justify-content-between align-items-center">
            <h5 class="review-stat">Pastrol</h5>
            <div class="small-ratings">
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
        </div>
        
        <div class="mt-1 d-flex justify-content-between align-items-center">
            <h5 class="review-stat">Office Space</h5>
            <div class="small-ratings">
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
        </div>
    </div>
    
    <div>
      
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
      {/* MODAL */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <Login>
          <SignIn />
        </Login>
      </div>
    </div>
  );
}