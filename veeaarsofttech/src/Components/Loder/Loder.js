import React from "react";
import { useLoader } from "./LoderContecxt.js";
import "./Loader.css";
import HashLoader from "react-spinners/HashLoader";

const Loader = () => {
  const { loading } = useLoader();

  return loading ? (
    <div className="col-10">
          <div className="container loder">
      <HashLoader height="300px" width="300px" color="#36d7b7" />
    </div>
    </div>

  ) : null;
};

export default Loader;
