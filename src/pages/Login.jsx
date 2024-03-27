import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessBoard } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export const Login = () => {
  return (
    
    <div>
      <div className="modal-dialog" style={{ maxWidth: '70%', maxHeight: '50%' }}>
        <div className="modal-content" style={{ border: '1px solid white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
          {/* MODAL HEADER*/}
          <div className="modal-header" style={{ backgroundColor: 'black', color: 'white' }}>
            <p className="modal-title fs-5" id="exampleModalLabel">L U D I X _ <FontAwesomeIcon icon={faChessBoard} /></p>
          </div>

          {/* MODAL CENTER*/}
          <section className="vh-50">
            <div className="container-fluid h-custom">
              <div className="row d-flex justify-content-center align-items-center h-100">
                {/* MODAL LEFT*/}
                <div className="col-md-9 col-lg-6 col-xl-5">
                  <img src="https://img.freepik.com/fotos-premium/varios-juegos-mesa-tablero-ajedrez-jugando-cartas-domino-sobre-fondo-claro-espacio-texto_287732-404.jpg?w=740" 
                  className="img-fluid" 
                  alt="Game" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum non error at eos mollitia dignissimos nam optio. Sapiente, quis. Assumenda dolores fugit id, error illo omnis suscipit? Fugit, consequuntur animi.</p>
                </div>
                {/* MODAL RIGHT*/}
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">  
                  <form>
                    <h1 className='text-center'> L o g i n _</h1>
                    <div className="form-outline mb-2">
                      <input type="email" id="form3Example1" className="form-control form-control-lg" placeholder="Enter a valid email address" />
                      <label className="form-label" htmlFor="form3Example1">Email address</label>
                    </div>
                    <div className="form-outline mb-2 ">
                      <input type="password" id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" />
                      <label className="form-label" htmlFor="form3Example4">Password</label>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="form-check mb-0">
                        <input className="form-check-input me-1" type="checkbox" value="" id="form2Example3" />
                        <label className="form-check-label" htmlFor="form2Example3">
                          Remember me
                        </label>
                      </div>
                      <a href="#!" className="text-body">Forgot password?</a>
                    </div>




                    {/* AQUI VA EL LOGIN DEL BACK  */}
                    <div className="text-center text-lg-center mt-4 pt-0">
                      <button 
                      type="button" 
                      className="btn btn-secondary btn-lg" 
                      style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>
                      L o g i n
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* MODAL FOOTER*/}
          <div className="modal-footer" style={{backgroundColor: 'black', color: 'white'}}>
            <button type="button" className="btn btn-light" data-bs-dismiss="modal">C l o s e</button>
          </div>
        </div>
      </div>
    </div>
  );
};

