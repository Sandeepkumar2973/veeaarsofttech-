// Loader.js

import React from "react";
import { useLoader } from "./LoderContecxt.js";

const Loader = () => {
  const { loading } = useLoader();

  return loading ? <div className="loader">Loading...</div> : null;
};

export default Loader;
