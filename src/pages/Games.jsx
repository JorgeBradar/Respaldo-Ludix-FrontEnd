import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessBoard } from '@fortawesome/free-solid-svg-icons'; 
import { Login } from "./Login";
import { SignIn } from "./SignIn";
import { Link } from "react-router-dom";




export const Games = () => {
    return  <div>
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

    {/*CARDS*/}
    <div className="container mt-2"> 

      {/* Card 1 */}
      <div className="row mt-2">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card">
            <img src="https://st.depositphotos.com/1016676/4017/i/450/depositphotos_40179869-stock-photo-hiker.jpg" className="card-img-top" alt="https://st.depositphotos.com/1016676/4017/i/450/depositphotos_40179869-stock-photo-hiker.jpg" />
            <div className="card-body text-center">
              <h5 className="card-title m-0">Cards Against Humanity</h5>
              <p>Party game for horrible people.</p>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, praesentium consequuntur magni reiciendis commodi ratione eum aspernatur corrupti non tempore odit ad dolor eaque possimus tempora mollitia obcaecati ullam corporis?</p>
              <a href="#" className="btn btn-primary">Find out More!</a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card">
            <img src="https://st.depositphotos.com/1016676/4017/i/450/depositphotos_40179869-stock-photo-hiker.jpg" className="card-img-top" alt="https://st.depositphotos.com/1016676/4017/i/450/depositphotos_40179869-stock-photo-hiker.jpg" />
            <div className="card-body text-center">
              <h5 className="card-title m-0">Catan</h5>
              <p>Trade build Settle.</p>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, praesentium consequuntur magni reiciendis commodi ratione eum aspernatur corrupti non tempore odit ad dolor eaque possimus tempora mollitia obcaecati ullam corporis?</p>
              <a href="#" className="btn btn-primary">Find out More!</a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card">
            <img src="https://st.depositphotos.com/1016676/4017/i/450/depositphotos_40179869-stock-photo-hiker.jpg" className="card-img-top" alt="https://st.depositphotos.com/1016676/4017/i/450/depositphotos_40179869-stock-photo-hiker.jpg" />
            <div className="card-body text-center">
            <h5 className="card-title m-0">Dixit</h5>
              <p>A picture is worth a thousand words!</p>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, praesentium consequuntur magni reiciendis commodi ratione eum aspernatur corrupti non tempore odit ad dolor eaque possimus tempora mollitia obcaecati ullam corporis?</p>
              <a href="#" className="btn btn-primary">Find out More!</a>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card">
            <img src="https://st.depositphotos.com/1016676/4017/i/450/depositphotos_40179869-stock-photo-hiker.jpg" className="card-img-top" alt="https://st.depositphotos.com/1016676/4017/i/450/depositphotos_40179869-stock-photo-hiker.jpg" />
            <div className="card-body text-center">
              <h5 className="card-title m-0">Spot it!</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, praesentium consequuntur magni reiciendis commodi ratione eum aspernatur corrupti non tempore odit ad dolor eaque possimus tempora mollitia obcaecati ullam corporis?</p>
              <a href="#" className="btn btn-primary">Find out More!</a>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card">
            <img src="https://st.depositphotos.com/1016676/4017/i/450/depositphotos_40179869-stock-photo-hiker.jpg" className="card-img-top" alt="https://st.depositphotos.com/1016676/4017/i/450/depositphotos_40179869-stock-photo-hiker.jpg" />
            <div className="card-body text-center">
              <h5 className="card-title m-0">card 5</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, praesentium consequuntur magni reiciendis commodi ratione eum aspernatur corrupti non tempore odit ad dolor eaque possimus tempora mollitia obcaecati ullam corporis?</p>
              <a href="#" className="btn btn-primary">Find out More!</a>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card">
            <img src="https://st.depositphotos.com/1016676/4017/i/450/depositphotos_40179869-stock-photo-hiker.jpg" className="card-img-top" alt="https://st.depositphotos.com/1016676/4017/i/450/depositphotos_40179869-stock-photo-hiker.jpg" />
            <div className="card-body text-center">
              <h5 className="card-title m-0">Spot it!</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, praesentium consequuntur magni reiciendis commodi ratione eum aspernatur corrupti non tempore odit ad dolor eaque possimus tempora mollitia obcaecati ullam corporis?</p>
              <a href="#" className="btn btn-primary">Find out More!</a>
            </div>
          </div>
        </div>

        {/* Card 7 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card">
            <img src="https://st.depositphotos.com/1016676/4017/i/450/depositphotos_40179869-stock-photo-hiker.jpg" className="card-img-top" alt="https://st.depositphotos.com/1016676/4017/i/450/depositphotos_40179869-stock-photo-hiker.jpg" />
            <div className="card-body text-center">
              <h5 className="card-title m-0">Spot it!</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, praesentium consequuntur magni reiciendis commodi ratione eum aspernatur corrupti non tempore odit ad dolor eaque possimus tempora mollitia obcaecati ullam corporis?</p>
              <a href="#" className="btn btn-primary">Find out More!</a>
            </div>
          </div>
        </div>

        {/* Card 8 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card">
            <img src="https://st.depositphotos.com/1016676/4017/i/450/depositphotos_40179869-stock-photo-hiker.jpg" className="card-img-top" alt="https://st.depositphotos.com/1016676/4017/i/450/depositphotos_40179869-stock-photo-hiker.jpg" />
            <div className="card-body text-center">
              <h5 className="card-title m-0">Spot it!</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, praesentium consequuntur magni reiciendis commodi ratione eum aspernatur corrupti non tempore odit ad dolor eaque possimus tempora mollitia obcaecati ullam corporis?</p>
              <a href="#" className="btn btn-primary">Find out More!</a>
            </div>
          </div>
        </div>
      </div>
    
    </div> {/* AQUI TERMINA EL CONTAINER  */}
    
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
}