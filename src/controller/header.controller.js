import { useState } from "react";

const HeaderController = () => {
  const [valueSearch, setValueSearch] = useState("");

  const handleValueSearch = (e) => {
    setValueSearch(e.target.value);
  };

  return { valueSearch, handleValueSearch };
};

export default HeaderController;
