/* eslint  react-hooks/exhaustive-deps: off*/
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/colorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    //JSX記法はreturn内を一つのタグで囲むこと。
    <>
      <h1 style={{ color: "red" }}>こんちは！</h1>
      <ColorfulMessage color="blue">お元気です？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!!</ColorfulMessage>
      <button onClick={onClickCountUp}>CountUp</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(´・ω・｀)</p>}
    </>
  );
};

export default App;
