import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import DashBoard from "./Pages/DashBoard";
import Expense from "./Pages/Expense";
import Income from "./Pages/Income";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<DashBoard />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/income" element={<Income />} />
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
