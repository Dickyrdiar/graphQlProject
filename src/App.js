// import logo from './logo.svg';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeIndex from "./container/Home";
import FormUpload from "./container/uploadProject";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header isLogin />
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/upload-project" element={<FormUpload />} />
      </Routes>
    </>
  );
}

export default App;
