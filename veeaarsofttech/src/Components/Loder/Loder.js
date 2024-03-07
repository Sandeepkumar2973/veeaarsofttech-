import React from "react";
import { useLoader } from "./LoderContecxt.js";
import { Vortex } from 'react-loader-spinner'
import "./Loader.css"

const Loader = () => {
  const { loading } = useLoader();

  return loading ? 
  <div className="container">
    <Vortex
  visible={true}
  height="80"
  width="80"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
  />
  </div>
   : null;
 
};

export default Loader;
