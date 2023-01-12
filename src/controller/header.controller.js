/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeaderController = () => {
  const [valueSearch, setValueSearch] = useState("");
  const history = useNavigate();

  const handleValueSearch = (e) => {
    setValueSearch(e.target.value);
  };

  const hadleUploadButton = () => {
    history("/upload-project");
  };

  const handleTohome = () => {
    history("/");
  };

  return { valueSearch, handleValueSearch, hadleUploadButton, handleTohome };
};

export default HeaderController;
