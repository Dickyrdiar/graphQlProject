// import logo from './logo.svg';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeIndex from "./container/View/Home";
// import FormUpload from "./container/uploadProject";
import Header from "./components/Header";
import Multistep from "./container/View/uploadProject/uploadAlternative";
import BlogPage from "./container/View/blog";
import DetailProject from "./container/View/detailProject";

function App() {
  return (
    <>
      <Header isLogin />
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/upload-project" element={<Multistep />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/detail/:name" element={<DetailProject />} />
      </Routes>
    </>
  );
}

export default App;
