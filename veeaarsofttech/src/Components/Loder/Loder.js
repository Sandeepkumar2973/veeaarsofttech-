import React from "react";
import { useLoader } from "./LoderContecxt.js";
import "./Loader.css";
import HashLoader from 'react-spinners/HashLoader';

const Loader = () => {
  const { loading } = useLoader();

  return loading ? (
    <div className="container loder">
      <HashLoader
       height="100px"
        width="100px"
       color="#36d7b7"           
        />
    </div>


  ) : null;
};

export default Loader;
