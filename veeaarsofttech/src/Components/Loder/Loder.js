import React from "react";
import { useLoader } from "./LoderContecxt.js";
import { Vortex } from "react-loader-spinner";
import "./Loader.css";
import HashLoader from 'react-spinners/HashLoader';

const Loader = () => {
  const { loading } = useLoader();

  return loading ? (
    <div className="container loder">
      <HashLoader color="#36d7b7"  className="loder"/>
    </div>
  ) : null;
};

export default Loader;
