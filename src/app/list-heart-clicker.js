export const executeScript = (clickElement) => {
  'use strict';
  setTimeout(() => {
    // UI elements
    const arrowSvgString = '<svg viewBox="0 0 24 24"><g><path d="M12 4.656l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0L12 4.656z"></path><path d="M12 12.465l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0l8.72-8.72z"></path></g></svg>';
    const likeSvgString = '<svg viewBox="0 0 24 24"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg>';

    // Utilities
    const random = (min, max) => Math.random() * (max - min) + min;

    const createFromHTML = (htmlString) => {
      var div = document.createElement('div');
      div.innerHTML = htmlString.trim();

      // Change this to div.childNodes to support multiple top-level nodes
      return div.firstChild;
    }

    // Get elements Utilites

    const arrowSvg = createFromHTML(arrowSvgString);
    const heartSvg = createFromHTML(likeSvgString);
    const blueColor = 'rgba(29,161,242,1.00)';

    arrowSvg.setAttribute("style", "transform: rotate(180deg);");
    const getNav = () => document.querySelector('nav[role="navigation"]');
    const getHearts = () => Array.from(document.querySelectorAll('main [d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"]'))
    const getTweets = (current) => {
      const all = Array.from(document.querySelectorAll('article'));
      return all.slice(all.indexOf(current) + 1);
    }

    // Setup settings
    const reloadStorageKey = 'heart-clicker-last-reload';
    const lastReloadStr = Number(localStorage.getItem(reloadStorageKey));
    const lastReload = !isNaN(lastReloadStr) ? new Date(lastReloadStr) : null;
    const getStorageKey = (key) => `t-${key}-${location.pathname}`
    const getLocalSettings = () => ({
      scroll: !!localStorage.getItem(getStorageKey('scroll')),
      like: !!localStorage.getItem(getStorageKey('like')),
    })

    let settings = getLocalSettings();

    // Setup loops
    let tweets = [];
    let currentIndex = 0;
    let reloads = 0;
    const rndReloads = random(10, 20);

    const startInterval = (callback, ms) => {
      callback();
      return setInterval(callback, ms);
    }

    const mainInterval = () => startInterval(() => {
      settings.like && getHearts().forEach((h, i) => setTimeout(() => settings.like && clickElement(h), 50 * (i + 1)));
  
      if (settings.scroll) {
        if(!settings.like) {
          // Liking is turned off, just scroll to each tweet
          let tweet = tweets[currentIndex++];
          if (!tweet) {
            tweets = getTweets(tweets[currentIndex - 2]);
            currentIndex = 0;
            tweet = tweets[currentIndex++];
            reloads++;
          }
          if (tweet) tweet.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          // Liking is turned on, scroll to heart icons
          setTimeout(()=> {
            let tweet = tweets[currentIndex++];
            if (!tweet) {
              tweets = getHearts();
              currentIndex = 0;
              tweet = tweets[currentIndex++];
              if (!tweet) {
                if (reloads > rndReloads) {
                  localStorage.setItem(reloadStorageKey, new Date().getTime());
                  window.location.reload();
                  return;
                }
                // If last reload was in the last 30 mins just chill and wait
                if(lastReload && lastReload < new Date().getTime() - 60000 * 30) {
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    left: 0,
                    behavior: 'smooth'
                  });
                }
                reloads++;
              }
            }
            if (tweet) tweet.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 2000);// wait this long so all the likes will fire properly
        }
      }
    }, 3000);

    let intervalKey = mainInterval();

    // Setup UX
    const uiContainer = getNav();

    const createNavElement = (newIcon, text, clickHandler) => {
      const newElement = uiContainer.lastChild.cloneNode(true);
      const oldIcon = newElement.querySelector('svg');

      newIcon.className.baseVal = oldIcon.className.baseVal;

      oldIcon.parentElement.appendChild(newIcon);
      oldIcon.parentElement.removeChild(oldIcon);

      const textSpan = newElement.querySelector('span');
      if (textSpan) {
        textSpan.innerHTML = text;
      }

      newElement.addEventListener('click', (e) => {
        clickHandler(e);
        e.preventDefault && e.preventDefault();
        return false;
      });

      return newElement;
    }

    const doButtonStyle = (button, activate) => {
      const svg = button.querySelector('svg');
      const text = button.querySelector('span');

      button.style.color = activate ? blueColor : null;

      if (svg) {
        svg.style.fill = activate ? blueColor : null
      }

      if (text) {
        text.style.color = activate ? blueColor : null;
      }
    }

    const handleClick = (settingKey) => ({ target }) => {
      const button = target.matches('[role="button"]') ? target : target.closest('[role="button"]');
      if (settings[settingKey] = !settings[settingKey]) {
        localStorage.setItem(getStorageKey(settingKey), '1');
        doButtonStyle(button, true);
      } else {
        localStorage.setItem(getStorageKey(settingKey), '');
        doButtonStyle(button, false);
      }
    };

    const scrollButton = createNavElement(arrowSvg, 'Auto Scroll', handleClick('scroll'));
    if (settings.scroll) doButtonStyle(scrollButton, true);

    const likeButton = createNavElement(heartSvg, 'Auto Like', handleClick('like'));
    if (settings.like) doButtonStyle(likeButton, true);

    uiContainer.prepend(likeButton);
    uiContainer.prepend(scrollButton);

    console.log({ uiContainer, likeButton, scrollButton })

    const getButton = (key) => ({
      scroll: scrollButton,
      like: likeButton,
    })[key];


    // Polling for client side navigation and tab inactivity
    let wasHidden = false;
    let { href } = window.location;
    setInterval(() => {
      if (href !== window.location.href) {
        href = window.location.href;
        settings = getLocalSettings();

        Object.entries(settings).forEach(([key, value]) => {
          const button = getButton(key);
          doButtonStyle(button, value);
        });
      }
      if (document.hidden) {
        if (!wasHidden) {
          wasHidden = true;
          clearInterval(intervalKey);
        }
      } else if (wasHidden) {
        wasHidden = false;
        intervalKey = mainInterval();
      }
    }, 50);
  }, 3000);
}