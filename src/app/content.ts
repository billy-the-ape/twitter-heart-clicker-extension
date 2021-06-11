import { executeScript } from "./list-heart-clicker";
import { coordinatesInViewport } from "./util";

chrome.runtime.sendMessage({ action: "init" }, () => {
  var checkReady = setInterval(() => {
    if (document.readyState === "complete") {
      clearInterval(checkReady);

      executeScript(async (el: Element) => {
        const { top, right, bottom, left } = el.getBoundingClientRect();

        if (!coordinatesInViewport({ top, bottom })) {
          return;
        }

        chrome.runtime.sendMessage({
          action: "click",
          x: (left + right) / 2,
          y: (top + bottom) / 2,
        });
      });
    }
  });
});
