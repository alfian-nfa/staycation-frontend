import "./assets/scss/style.scss";
import LandingPage from "./pages/LandingPage";
import DetailsPage from "./pages/DetailsPage";
import Checkout from "./pages/Checkout";

import { Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/properties/:id" element={<DetailsPage />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
