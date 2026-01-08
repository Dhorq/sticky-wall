import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Note from "./components/Note";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="px-21 py-12 min-h-screen bg-gray-100">
      <Navbar />
      <Note />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
