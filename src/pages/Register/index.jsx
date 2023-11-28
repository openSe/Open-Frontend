import React, { useState } from "react";
import "./index.css"; // Importar el archivo CSS

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) =>  {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic with username, email, and password
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    // Reset the form
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container-register">
      <h1 className="h1-register h1">Registro</h1>
      <p className="p-register">Bienvenido a Open Services, ingresa tus datos para registrarte como Usuario de nuestro Sitio Web.</p>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="div-flex-register">
          <div>
            <label>Nombres <span>*</span></label>
            <input type="text" required/>
          </div>
          <div>
            <label>Apellidos <span>*</span></label>
            <input type="text" required/>
          </div>
        </div>
        <div className="div-flex-register">
          <div>
            <label>Correo Electronico <span>*</span></label>
            <input type="text" required/>
          </div>
          <div>
            <label>N. Celular <span>*</span></label>
            <input type="text" required/>
          </div>
        </div>
        <div className="div-flex-register">
          <div>
            <label>Contraseña <span>*</span></label>
            <input type="text" required/>
          </div>
          <div>
            <label>Confirmar Contraseña <span>*</span></label>
            <input type="text" required/>
          </div>
        </div>
        <button type="submit" className="button-register">Register</button>
      </form>
    </div>
  ); 
}

export default Register;
