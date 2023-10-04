function openMultiWindow(windows, options, callback) {
  const openedWindows = [];

  function openNextWindow(index) {
    if (index < windows.length) {
      const { url, name } = windows[index];
      const win = window.open(url, name || "", ...options);

      if (win) {
        openedWindows.push(win);
        win.addEventListener("load", () => {
          openNextWindow(index + 1);
        });
      } else {
        console.error(`Failed to open window at index ${index}`);
        openNextWindow(index + 1);
      }
    } else {
      if (typeof callback === "function") {
        callback(openedWindows);
      }
    }
  }

  openNextWindow(0);
}

// 예시 사용법:
// openMultiWindow(windows, options, (openedWindows) => {
//   // 모든 창이 열린 후에 실행할 코드
// });

module.exports = openMultiWindow;
