import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Home from "./routes/Home";
 import Detail from "./routes/Detail"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react-study" element={<Home />} />
        <Route path="/react-study/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
