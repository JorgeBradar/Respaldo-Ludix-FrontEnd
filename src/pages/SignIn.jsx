import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessBoard } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const SignIn = () => {
  const [selectedDate, setSelectedDate] = useState(null);
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

                {/* MODAL RIGHT*/}
                <div className="col-md-9 col-lg-6 col-xl-5">
                  <img src="https://img.freepik.com/fotos-premium/varios-juegos-mesa-tablero-ajedrez-jugando-cartas-domino-sobre-fondo-claro-espacio-texto_287732-404.jpg?w=740" 
                  className="img-fluid" 
                  alt="Game" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum non error at eos mollitia dignissimos nam optio. Sapiente, quis. Assumenda dolores fugit id, error illo omnis suscipit? Fugit, consequuntur animi.</p>
                </div>

                {/* MODAL LEFT*/}
                <div className="col-md-12 col-lg-6 col-xl-7">  
                  <form>
                    <h3 className='text-center'> Create an account</h3>
                    <div className="form-outline mb-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div style={{ marginRight: '1rem', flex: 1 }}>
                        <input type="text" id="firstName" className="form-control form-control-lg" placeholder="Enter your first name" />
                      </div>
                      <div style={{ marginLeft: '1rem', flex: 1 }}>
                        <input type="text" id="lastName" className="form-control form-control-lg" placeholder="Enter your last name" />
                      </div>
                    </div>
                    <div className="form-outline mb-2">
                      <input type="email" id="email" className="form-control form-control-lg" placeholder="Enter a valid email address" />
                    </div>
                    <div className="form-outline mb-2">
                      <input type="email" id="email" className="form-control form-control-lg" placeholder="Enter a your password" />
                    </div>
                    <div className="form-outline mb-2" style={{ display: 'flex' }}>
                      <div style={{ marginRight: '2rem' }}>
                        <p>Birthday:</p>
                        <DatePicker 
                          selected={selectedDate} 
                          onChange={date => setSelectedDate(date)} 
                          className="btn btn-secondary" 
                          placeholderText="Select date"
                          dateFormat="dd/MM/yyyy" //
                          showYearDropdown 
                          scrollableYearDropdown 
                        />
                      </div>
                      <div style={{ marginLeft: '2rem' }}>
                        <p>Sex:</p>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <label style={{ marginRight: '1rem' }}>
                            <input type="checkbox" value="Man" />
                            Man
                          </label>
                          <label style={{ marginRight: '1rem' }}>
                            <input type="checkbox" value="Woman" />
                            Woman
                          </label>
                          <label>
                            <input type="checkbox" value="Other" />
                            Other
                          </label>
                        </div>
                      </div>
                    </div>




                    {/* AQUI VA EL REGISTRO DEL BACK USUARIOS NOMBRE, APELLIDO, E-MAIL, PASSWORD Y CUMPLEANOS  */}
                    <div className="text-center text-lg-center mt-4 pt-0">
                      <button 
                      type="button" 
                      className="btn btn-secondary btn-lg" 
                      style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>
                      R e g i s t e r
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