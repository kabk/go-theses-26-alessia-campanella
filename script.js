
document.addEventListener("DOMContentLoaded", function () {
  var enterButton = document.getElementById("enter-archive");

  function goToFirstChapter() {
    window.location.href = "chapter-1.html";
  }

  if (enterButton) {
    enterButton.addEventListener("click", function () {
      goToFirstChapter();
    });

    enterButton.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        goToFirstChapter();
      }
    });
  }

  var typingElement = document.getElementById("typing-text");
  var typingContainer = document.getElementById("chapter-2");

  var typingText =
    "ARCHIVE ENTRY LOG.\n" +
    "Matricola n.: 1265.\n\n" +
    "The operator confirms the existence of the archive, but not its completeness.";

  var typingSpeed = 40;

  if (typingElement && typingContainer) {
    var hasStarted = false;

    var observer = new IntersectionObserver(
      function (entries) {
        for (var i = 0; i < entries.length; i++) {
          var entry = entries[i];
          if (entry.isIntersecting && hasStarted === false) {
            hasStarted = true;
            typeText(typingElement, typingText, typingSpeed);
            observer.disconnect();
          }
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(typingContainer);
  }
});

function typeText(targetElement, text, speed) {
  var index = 0;

  function step() {
    if (index <= text.length) {
      targetElement.textContent = text.slice(0, index);
      index = index + 1;
      window.setTimeout(step, speed);
    }
  }

  step();
}

