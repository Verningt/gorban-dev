document
  .getElementById("copyEmail")
  .addEventListener("click", function (event) {
    event.preventDefault();
    copyToClipboard("gortrans@live.com");
  });

document
  .getElementById("copyPhone")
  .addEventListener("click", function (event) {
    event.preventDefault();
    copyToClipboard("+(314)-504-7886");
  });

function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(text)
      .then(function () {
        alert("Скопировано: " + text);
      })
      .catch(function (err) {
        console.error("Не удалось скопировать текст: ", err);
      });
  } else {
    var tempInput = document.createElement("textarea");
    tempInput.value = text;
    tempInput.style.position = "fixed"; // Avoid scrolling to bottom of page in MS Edge.
    document.body.appendChild(tempInput);
    tempInput.focus();
    tempInput.select();
    try {
      document.execCommand("copy");
      alert("Скопировано: " + text);
    } catch (err) {
      console.error("Не удалось скопировать текст: ", err);
    }
    document.body.removeChild(tempInput);
  }
}
