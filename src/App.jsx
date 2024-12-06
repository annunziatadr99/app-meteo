import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import PaginaMeteo from "./Components/PaginaMeteo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/weather" element={<PaginaMeteo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
