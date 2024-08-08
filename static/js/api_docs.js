if (document.readyState !== "complete") {
  // For static site generation, style upon load
  window.addEventListener("load", function () {
    hljs.highlightAll();
  });
} else {
  // Workaround during development (SPA)
  window.setTimeout(function () {
    hljs.highlightAll();
  }, 500);
}
