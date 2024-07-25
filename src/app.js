document
  .getElementById("copyEmail")
  .addEventListener("click", async function (event) {
    event.preventDefault();
    await copyToClipboard("gortrans@live.com");
  });
document
  .getElementById("copyEmail")
  .addEventListener("touchend", async function (event) {
    event.preventDefault();
    await copyToClipboard("gortrans@live.com");
  });

document
  .getElementById("copyPhone")
  .addEventListener("click", async function (event) {
    event.preventDefault();
    await copyToClipboard("+(314)-504-7886");
  });
document
  .getElementById("copyPhone")
  .addEventListener("touchend", async function (event) {
    event.preventDefault();
    await copyToClipboard("+(314)-504-7886");
  });

async function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      alert("Скопировано: " + text);
    } catch (err) {
      console.error("Не удалось скопировать текст: ", err);
      fallbackCopyTextToClipboard(text);
    }
  } else {
    fallbackCopyTextToClipboard(text);
  }
}

function fallbackCopyTextToClipboard(text) {
  var tempInput = document.createElement("textarea");
  tempInput.value = text;
  tempInput.style.position = "fixed"; // Avoid scrolling to bottom of page in MS Edge.
  tempInput.style.top = "0";
  tempInput.style.left = "0";
  tempInput.style.width = "1px";
  tempInput.style.height = "1px";
  tempInput.style.padding = "0";
  tempInput.style.border = "none";
  tempInput.style.outline = "none";
  tempInput.style.boxShadow = "none";
  tempInput.style.background = "transparent";
  document.body.appendChild(tempInput);
  tempInput.focus();
  tempInput.select();
  try {
    var successful = document.execCommand("copy");
    var msg = successful ? "успешно" : "неуспешно";
    alert("Скопировано: " + text + " (" + msg + ")");
  } catch (err) {
    console.error("Не удалось скопировать текст: ", err);
  }
  document.body.removeChild(tempInput);
}
