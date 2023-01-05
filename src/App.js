// import logo from './logo.svg';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomeIndex from "./container/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeIndex />} />
      </Routes>
    </>
  );
}

export default App;
