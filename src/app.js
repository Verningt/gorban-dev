document
  .getElementById("copyEmail")
  .addEventListener("click", async function (event) {
    await copyToClipboard("gortrans@live.com");
  });

document
  .getElementById("copyPhone")
  .addEventListener("click", async function (event) {
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
    document.execCommand("copy");
    alert("Скопировано: " + text);
  } catch (err) {
    console.error("Не удалось скопировать текст: ", err);
  }
  document.body.removeChild(tempInput);
}
