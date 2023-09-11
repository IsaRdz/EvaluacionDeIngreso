import React, { useState } from "react";
import ImageProfile from "../../assets/profile.jpg";
import ImageLogin from "../../assets/login.png";

import appFirebase from "../../credentials";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const auth = getAuth(appFirebase);

const Login = () => {
  const [newUser, setNewUser] = useState(false);

  const functAuth = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (newUser) {
      await createUserWithEmailAndPassword(auth, email, password);
    } else {
      await signInWithEmailAndPassword(auth, email, password);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="father">
            <div className="card card-body shadow-lg">
              <img src={ImageProfile} alt="" className="style-profile" />
              <form onSubmit={functAuth}>
                <input
                  type="text"
                  placeholder="Ingresar email"
                  className="text-box"
                  id="email"
                />
                <input
                  type="password"
                  placeholder="Ingresar contraseña"
                  className="text-box"
                  id="password"
                />
                <button className="btn-form">
                  {newUser ? "Registrarse" : "Iniciar sesión"}{" "}
                </button>
              </form>
              <h4 className="text">
                {newUser ? "Si ya tienes cuenta" : "No tienes cuenta"}
                <button
                  onClick={() => setNewUser(!newUser)}
                  className="btn-switch"
                >
                  {newUser ? "Inicia sesión" : "Registrarse"}{" "}
                </button>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <img src={ImageLogin} alt="" className="image-size" />
        </div>
      </div>
    </div>
  );
};

export default Login;
