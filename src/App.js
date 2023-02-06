// import logo from './logo.svg';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeIndex from "./container/View/Home";
// import FormUpload from "./container/uploadProject";
import Header from "./components/Header";
import Multistep from "./container/View/uploadProject/uploadAlternative";
import BlogPage from "./container/View/blog";
import DetailProject from "./container/View/detailProject";
import Authentication from "./auth/auth";
import PopupLogin from "./components/popupLogin";
// import PopupLogin from "./components/popupLogin";

function App() {
  const controllerAuth = Authentication();

  console.log("handle login", controllerAuth.user);

  return (
    <>
      <Header
        handleLogin={controllerAuth.handleClickLogin}
        handleSignUp={controllerAuth.handleClickLogin}
        isLogin={controllerAuth.isAuthenticated}
      />
      <PopupLogin
        isOpen={controllerAuth.showPopup}
        onClose={controllerAuth.handleClickClose}
        onClickLoginWithGithub={controllerAuth.handleLoginWithGithub}
        onClickLoginWithGmail={controllerAuth.handleLoginWithGmail}
      />
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
