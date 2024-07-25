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
    var tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Скопировано: " + text);
  }
}
