import React from "react";

function Tickler() {
  function tickle() {
    console.log("hello");
  }

  return <button onClick={tickle}>Tickle me!</button>;
}

export default Tickler;
