import React from "react";

function App(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img src={props.img} alt="avatar_img" className="circle-img" />
        </div>
        <div className="bottom">
          <p className="info">{props.phone}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
