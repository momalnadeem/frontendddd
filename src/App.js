import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Add from "./components/Add";
import Edit from "./components/Edit";
import MyProduct from "./components/MyProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stock" element={<MyProduct />} />
        <Route path="/add" element={<Add />} />

        <Route path="/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
