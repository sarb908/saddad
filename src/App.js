import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import RequiredAuth from "./hoc/RequiredAuth";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/Products"
          element={
            <RequiredAuth>
              <Products />
            </RequiredAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
