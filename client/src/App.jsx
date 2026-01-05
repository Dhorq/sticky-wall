import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Note from "./components/Note";

function App() {
  return (
    <div className="px-20 py-12 min-h-screen bg-gray-100">
      <Navbar />
      <Note />
      <Toaster />
    </div>
  );
}

export default App;
