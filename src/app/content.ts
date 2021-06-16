import { executeScript } from "./list-heart-clicker";
import { coordinatesInViewport } from "./util";

const random = (min, max) => Math.random() * (max - min) + min;

chrome.runtime.sendMessage({ action: "init" }, () => {
  var checkReady = setInterval(() => {
    if (document.readyState === "complete") {
      clearInterval(checkReady);

      executeScript(async (el: Element) => {
        const { top, right, bottom, left } = el.getBoundingClientRect();

        if (!coordinatesInViewport({ top, bottom })) {
          return;
        }

        const x = random(left, right);
        const y = random(top, bottom);

        console.log({ el, x, y });

        chrome.runtime.sendMessage({
          action: "click",
          x,
          y,
        });
      });
    }
  });
});
