import appFirebase from "./credentials";
import "./App.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from "./Components/Login.jsx/Login";
import Home from "./Components/Home/Home";
import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
const auth = getAuth(appFirebase);

function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUser(usuarioFirebase);
    } else {
      setUser(null);
    }
  });

  return (
    <>
      <Navbar />
      <div>{user ? <Home emailUser={user.email} /> : <Login />}</div>
    </>
  );
}

export default App;
