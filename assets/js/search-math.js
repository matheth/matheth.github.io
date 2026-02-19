document.addEventListener("alpine:init", () => {
  Alpine.effect(() => {
    const results = document.querySelectorAll(".search-result");

    results.forEach((result) => {
      if (result.dataset.mathProcessed === "true") return;

      // Remove Pagefind highlight marks inside math
      result.querySelectorAll("mark").forEach((mark) => {
        const parent = mark.parentNode;
        parent.replaceChild(document.createTextNode(mark.textContent), mark);
      });

      if (window.renderMathInElement) {
        renderMathInElement(result, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false }
          ]
        });
      }

      result.dataset.mathProcessed = "true";
    });
  });
});
