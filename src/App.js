import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ResultsPage from './components/ResultsPage';

function App() {
  const [sugarContent, setSugarContent] = useState(null);
  const [firmness, setFirmness] = useState(null);
  const [tat, setTat] = useState(null);
  const [ripeness, setRipeness] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage setSugarContent={setSugarContent} setFirmness={setFirmness} setTat={setTat} setRipeness={setRipeness}/>} />
        <Route path="/results" element={<ResultsPage sugarContent={sugarContent} firmness={firmness} tat={tat} ripeness={ripeness} />} />
      </Routes>
    </Router>
  );
}

export default App;
