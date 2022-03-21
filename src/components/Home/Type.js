import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Automating Stuff",
          "Web Development",
          "Game Development",
          "App Development",
          "Robotics",
          "Simulations"
        ],
        autoStart: true,
        loop: true,
        delay: 20,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;
