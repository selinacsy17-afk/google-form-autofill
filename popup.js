document.getElementById("fill").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: () => {
        window.postMessage({ type: "AUTO_FILL_FORM" }, "*");
      }
    });
  });
});
