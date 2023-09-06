import React from "react";
import ImageProfile from "../../assets/profile.jpg";
import ImageLogin from "../../assets/login.png";

const Login = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="father">
            <div className="card card-body">
              <form>
                <input type="text" placeholder="Ingresar email" />
                <input type="password" placeholder="Ingresar contraseña" />
                <button>Registrarse</button>
              </form>
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
