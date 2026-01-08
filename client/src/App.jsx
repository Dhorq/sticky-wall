import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Create from "./pages/Create";

function App() {
  return (
    <div className="px-21 py-12 min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
