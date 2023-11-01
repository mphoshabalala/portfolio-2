import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutMePage from "./pages/AboutMePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/about-me" element={<AboutMePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
