function openMultiWindow(windows, options = {}) {
  return new Promise((resolve, reject) => {
    const openedWindows = [];
    let currentIndex = 0;

    function openNextWindow() {
      if (currentIndex < windows.length) {
        const { url, name = "" } = windows[currentIndex];
        if (!isValidURL(url)) {
          const error = new Error(
            `Invalid URL at index ${currentIndex}: ${url}`
          );
          reject(error);
          currentIndex++;
          openNextWindow();
          return;
        }
        try {
          const win = window.open(url, name, options);
          if (win) {
            openedWindows.push(win);
          } else {
            const error = new Error(
              `Failed to open window at index ${currentIndex}: URL ${url}`
            );
            reject(error);
          }
        } catch (error) {
          const errorMsg = `Error opening window at index ${currentIndex}: ${error.message}`;
          reject(new Error(errorMsg));
        }
        currentIndex++;

        setTimeout(openNextWindow, 1000);
      } else {
        resolve(openedWindows);
      }
    }

    openNextWindow();
  });
}

function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

module.exports = openMultiWindow;
