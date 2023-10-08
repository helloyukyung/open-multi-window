function openMultiWindow(windows, options = { delay: 1000 }) {
  return new Promise((resolve, reject) => {
    const openedWindows = [];
    let currentIndex = 0;

    function openNextWindow() {
      if (currentIndex < windows.length) {
        const { url, name = "" } = windows[currentIndex];
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

        setTimeout(openNextWindow, options.delay);
      } else {
        resolve(openedWindows);
      }
    }

    openNextWindow();
  });
}

module.exports = openMultiWindow;
