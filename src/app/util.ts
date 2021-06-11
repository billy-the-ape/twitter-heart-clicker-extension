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
  const target = { tabId },
    args = {
      ...location,
      type: "mousePressed",
      button,
      clickCount,
    };

  chrome.debugger.attach(target, "1.2", () => {
    chrome.debugger.sendCommand(
      target,
      "Input.dispatchMouseEvent",
      args,
      () => {
        args.type = "mouseReleased";
        chrome.debugger.sendCommand(
          target,
          "Input.dispatchMouseEvent",
          args,
          () => chrome.debugger.detach(target)
        );
      }
    );
  });
};
