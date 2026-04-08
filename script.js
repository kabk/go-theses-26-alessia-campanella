
document.addEventListener("DOMContentLoaded", function () {
  var enterButton = document.getElementById("enter-archive");
  var fakeLoginForm = document.getElementById("fake-login");

  function goToFirstChapter() {
    window.location.href = "chapter-1.html";
  }

  if (fakeLoginForm) {
    fakeLoginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      goToFirstChapter();
    });
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
});
