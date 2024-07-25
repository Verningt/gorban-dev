document.getElementById("copyEmail").addEventListener("click", function () {
  copyToClipboard("gortrans@live.com");
});

document.getElementById("copyPhone").addEventListener("click", function () {
  copyToClipboard("+(314)-504-7886");
});

function copyToClipboard(text) {
  var tempInput = document.createElement("textarea");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // For mobile devices

  console.log("Before execCommand");
  try {
    var successful = document.execCommand("copy");
    console.log("After execCommand");
    var msg = successful ? "успешно" : "неуспешно";
    alert("Скопировано: " + text + " (" + msg + ")");
  } catch (err) {
    console.error("Не удалось скопировать текст: ", err);
    alert("Ошибка копирования: " + err);
  }

  document.body.removeChild(tempInput);
  console.log("Temporary input removed");
}
