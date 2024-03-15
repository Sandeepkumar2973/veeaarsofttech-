import React from "react";
import { useLoader } from "./LoderContecxt.js";
import "./Loader.css";
import HashLoader from "react-spinners/HashLoader";

const Loader = () => {
  const { loading } = useLoader();

  return loading ? (
    <div className="container loder">
<<<<<<< HEAD
      <HashLoader color="#36d7b7" className="loder" />
=======
      <HashLoader
       height="100px"
        width="100px"
       color="#36d7b7"           
        />
>>>>>>> bd460476b76e7f19e4f1f735f6d5d2a07dde9d51
    </div>


  ) : null;
};

export default Loader;
