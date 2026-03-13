import { Visualizer } from "./visualizer.js";

import { bubbleSort } from "./algorithms/bubble.js";
import { selectionSort } from "./algorithms/selection.js";

let timer = null;
let algos = [];

function init() {
  stop();

  const size = parseInt(document.getElementById("data").value);
  const randomData = Array.from(
    { length: size },
    () => Math.floor(Math.random() * 100) + 1
  );

  algos = [
    {
      engine: bubbleSort([...randomData]),
      visualizer: new Visualizer("bubble-canvas"),
      done: false,
    },
    {
      engine: selectionSort([...randomData]),
      visualizer: new Visualizer("selection-canvas"),
      done: false,
    },
  ];

  algos.forEach((a) => a.visualizer.draw(randomData));
}

function stop() {
  if (timer) {
    document.getElementById("play").innerText = "Start";
    clearInterval(timer);
    timer = null;
  }
}

function togglePlay() {
  if (timer) {
    stop();
  } else {
    document.getElementById("play").innerText = "Stop";
    timer = setInterval(() => {
      let allDone = true;

      algos.forEach((a) => {
        if (a.done) return;
        allDone = false;

        const step = a.engine.next();
        if (step.done) a.done = true;
        else {
          a.visualizer.draw(
            step.value.data,
            step.value.comparing,
            step.value.moving,
            step.value.sorted
          );
        }
      });

      if (allDone) stop();
    }, parseInt(document.getElementById("speed").value));
  }
}

document.getElementById("reset").onclick = init;
document.getElementById("play").onclick = togglePlay;

init();
