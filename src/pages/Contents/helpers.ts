function keyboardHandler(up: () => void, down: () => void, enter: () => void) {
  return (e: KeyboardEvent) => {
    switch (e.code) {
      case "ArrowUp":
        up();
        break;
      case "ArrowDown":
        down();
        break;
      case "Enter":
        enter();
        break;
      default:
        break;
    }
  };
}

function touchHandler(up: () => void, down: () => void) {
  let start = 0;
  let end = 0;

  function touchStart(e: TouchEvent) {
    start += e.touches[0].clientY / 10;
  }
  function touchMove(e: TouchEvent) {
    end += e.touches[0].clientY / 100;
  }
  function touchEnd(e: TouchEvent) {
    if (end / start > 1.5) up();
    else down();

    start = 0;
    end = 0;
  }

  return { touchStart, touchMove, touchEnd };
}

function wheelHandler(up: () => void, down: () => void) {
  let count = 0;
  let direction = "";

  return (e: WheelEvent) => {
    let delta = 1;

    count += 1;
    delta += e.deltaY * -0.01;

    delta = Math.min(Math.max(0.125, delta), 4);

    delta > 1 ? (direction = "down") : (direction = "up");

    if (count <= 12 && count >= 4) {
      if (direction === "down") {
        up();
        count = 0;
      }

      if (direction === "up") {
        down();
        count = 0;
      }
    }
  };
}

export { keyboardHandler, touchHandler, wheelHandler };
