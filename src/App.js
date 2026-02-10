import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Home from "./routes/Home";
 import Detail from "./routes/Detail"

function App() {
  return (
    <BrowserRouter basename="/react-study">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
