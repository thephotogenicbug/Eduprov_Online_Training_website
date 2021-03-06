import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import FrontEndDevelopment from "./Components/pages/FrontEndDevelopment";
import Application from "./Components/pages/Application";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/front-end-dev"
            element={<FrontEndDevelopment />}
          />
          <Route
            exact
            path="/application"
            element={<Application/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
