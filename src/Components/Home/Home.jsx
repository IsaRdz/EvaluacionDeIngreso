import React from "react";
import appFirebase from "../../credentials";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(appFirebase);

const Home = ({ emailUser }) => {
  return (
    <div>
      <h1>Bienvenido usuario {emailUser} </h1>
      <button className="btn btn-primary"> Cerrar Sesión</button>
    </div>
  );
};

export default Home;
