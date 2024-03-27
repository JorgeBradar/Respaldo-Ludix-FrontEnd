import React from "react";

const CommentSection = () => {
  return (
    <div className="container">
      <h1>Sección de Comentarios</h1>
      
      {/* Formulario para agregar comentario */}
      <form>
        <div className="form-group">
          <label htmlFor="username">Nombre de Usuario:</label>
          <input type="text" className="form-control" id="username" placeholder="Ingrese su nombre" />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comentario:</label>
          <textarea className="form-control" id="comment" rows="3" placeholder="Escribe tu comentario aquí"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Agregar Comentario</button>
      </form>
      
      <hr />
      
      {/* Lista de comentarios */}
      <div className="comments">
        <div className="comment">
          <h5>Usuario 1</h5>
          <p>Este es un comentario de ejemplo.</p>
        </div>
        <div className="comment">
          <h5>Usuario 2</h5>
          <p>Otro comentario de ejemplo.</p>
        </div>
        {/* Puedes agregar más comentarios aquí */}
      </div>
    </div>
  );
}

export default CommentSection;
