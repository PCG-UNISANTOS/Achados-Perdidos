import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listagem from "./components/Listagem/Listagem";
import Visualizar from "./components/Visualizar/Visualizar";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Listagem />} />
            <Route path="/visualizar" element={<Visualizar />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
