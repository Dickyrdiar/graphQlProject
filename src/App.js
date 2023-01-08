// import logo from './logo.svg';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeIndex from "./container/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeIndex />} />
      </Routes>
    </>
  );
}

export default App;
