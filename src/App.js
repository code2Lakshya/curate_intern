import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
