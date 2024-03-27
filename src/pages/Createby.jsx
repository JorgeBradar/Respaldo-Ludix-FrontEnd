import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessBoard } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from "react-router-dom";

export const Createby = () => {
    return (
        <div>
            {/* NAVBAR */}
            <nav className="navbar bg-black border-body" data-bs-theme="dark">
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
            
             {/* Aqui va el centro de la pagina */ }
            <div className="container mt-2">
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="item-content">
                    <img src="https://i.pinimg.com/originals/67/22/8c/67228caae9fc2f4d8711b6463c58e164.jpg" 
                    alt="Imagen 1" 
                    className="item-image" />
                    <div className="text">
                        <h5>Nombre: Alfonso "El Jefe"</h5>
                        <h5>Rol: Desarrollador</h5></div>
                    </div>
                </li>
                <li className="list-group-item">
                <div className="item-content">
                    <img src="https://i.pinimg.com/originals/67/96/0c/67960c079dd76484b816c714a30b7d7f.jpg"
                    alt="Imagen 1" 
                    className="item-image" />
                    <div className="text">
                        <h5>Nombre: Jorge</h5>
                        <h5>Rol: Desarrollador</h5></div>
                    </div>
                </li>
                <li className="list-group-item">
                <div className="item-content">
                    <img src="https://i.ytimg.com/vi/utEORcimmJU/maxresdefault.jpg" 
                    alt="Imagen 1" 
                    className="item-image" />
                    <div className="text">
                        <h5>Nombre: Viviana</h5>
                        <h5>Rol: Desarrolladora</h5></div>
                    </div>
                </li>
                <li className="list-group-item">
                <div className="item-content">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMkje4VifPMKhVaZ3eBYZ30tr10vfkcYPbgw&usqp=CAU"
                     alt="Imagen 1" 
                     className="item-image" />
                    <div className="text">
                        <h5>Nombre: Pedro</h5>
                        <h5>Rol: Desarrollador</h5></div>
                    </div>
                </li>
                </ul>
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