import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/dashboard/Dashboard";
import Result from './pages/result/Result';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/result" element={<Result/>} />
      </Routes>
    </>
  );
}

export default App;
