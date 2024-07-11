import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EventDetail from "./pages/EventDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<EventDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
