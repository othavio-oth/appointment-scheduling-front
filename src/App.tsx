import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";

function App() {
  return (
    <div className="app w-4/6 mx-auto py-6">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
