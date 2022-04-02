import React, { useEffect, useRef } from "react";
import animate from "./animate";

export default function Animation({ setAnimationFrames, animationFrames }) {
  const promiseReject = useRef(null);
  useEffect(() => {
    const anim = new Promise((resolve, reject) => {
      promiseReject.current = reject;
      requestAnimationFrame(() => animate(animationFrames, resolve));
    });
    anim.then(() => setAnimationFrames([]));
    return () => promiseReject.current();
  }, [animationFrames, setAnimationFrames]);

  return <div id="animation"></div>;
}
