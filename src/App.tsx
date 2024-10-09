import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import RegisterPacient from "./pages/pacient/Register";
function App() {
  return (
    <div className="app w-4/6 mx-auto py-6">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="pacients/register" element={<RegisterPacient />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
