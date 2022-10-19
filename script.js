let modablesImg = document.querySelectorAll("img.modable");

for (let i = 0; i < modablesImg.length; i++) {
    modablesImg[i].addEventListener("click", function () {
        generateModal(modablesImg[i].src, modablesImg[i].getAttribute("data-modal-caption"));
    })
}

function generateModal(src, caption) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let text = document.createElement("span");
    let close = document.createElement("span");

    div.classList.add("modal");
    img.classList.add("modal-img");
    text.classList.add("modal-caption");
    close.classList.add("modal-dismiss");

    text.innerHTML = caption;
    close.innerHTML = "&times;";
    close.addEventListener("click", function () {
        document.body.removeChild(this.parentNode);
    });
    img.src = src;
    div.appendChild(img, close, text);

    document.body.appendChild(div);
}