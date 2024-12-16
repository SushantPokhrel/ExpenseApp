import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import DashBoard from "./Pages/DashBoard";
import Expense from "./Pages/Expense";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<DashBoard />} />
          <Route path="/expense" element={<Expense />} />
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
