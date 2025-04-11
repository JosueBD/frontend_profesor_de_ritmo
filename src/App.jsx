import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditorTest from "./componentes/EditorTest";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/editor" element={<EditorTest />} />
      </Routes>
    </Router>
  );
};

export default App;
