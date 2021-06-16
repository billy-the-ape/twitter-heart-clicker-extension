export const coordinatesInViewport = ({
  top,
  bottom,
}: Pick<DOMRect, "top" | "bottom">) => {
  if (top >= 0 && bottom <= window.innerHeight) {
    return true;
  }
  return false;
};

export const clickLocation = (
  location: { x: number; y: number },
  tabId: number,
  button = "left",
  clickCount = 1
) => {
  const target = { tabId };
  const clickArgs = {
    ...location,
    type: "mousePressed",
    button,
    clickCount,
  };

  const movedArgs = { ...location, type: "mouseMoved" };

  chrome.debugger.attach(target, "1.2", () => {
    chrome.debugger.sendCommand(
      target,
      "Input.dispatchMouseEvent",
      { ...location, type: "mouseMoved" },
      () => {
        chrome.debugger.sendCommand(
          target,
          "Input.dispatchMouseEvent",
          clickArgs,
          () => {
            clickArgs.type = "mouseReleased";
            chrome.debugger.sendCommand(
              target,
              "Input.dispatchMouseEvent",
              clickArgs,
              () => chrome.debugger.detach(target)
            );
          }
        );
      }
    );
  });
};
