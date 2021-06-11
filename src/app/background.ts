import { clickLocation } from "./util";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message.action) {
    case "click":
      clickLocation(
        {
          x: message.x,
          y: message.y,
        },
        sender.tab.id
      );
  }
});
