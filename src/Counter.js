import React from "react";
const { useState } = React;


const Home = () => {
  const [count, setCount] = useState(0);
  const onClick = () => {
setCount(count + 1);
  };
  const onClickDec = () => {
setCount(count - 1);
  };

  return (
<div>
  <h1>Please click me for increase {count}</h1>
  <button className="btn btn-primary btn-sm" onClick={onClick}>
    +
  </button>
  <button disabled={count < 1} className="btn btn-primary btn-sm" onClick={onClickDec}>
    -
  </button>
</div>
  );
};

export default Counter