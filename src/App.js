import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [state, setState] = useState(0);

  const Onsubmit = () => {
    setState(state + 1);
  };

  const Onsubmit1 = () => {
    setState(state - 1);
  };
  return (
    <div className="  container vh-100   ">
      <div className="row  m-5 ">
        <div className=" col">
          <button onClick={Onsubmit1} className="btn btn-secondary">
            <h1>-</h1>
          </button>
        </div>
        <div className="col">
          <h1> {state}</h1>
        </div>
        <div className=" col">
          <button onClick={Onsubmit} className="btn btn-primary   ">
            <h1>+</h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
