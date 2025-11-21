import "./styles/main.sass";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Listagem from "./pages/Listagem";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listagem" element={<Listagem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
