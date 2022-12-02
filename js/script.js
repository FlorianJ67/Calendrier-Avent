const txtboxs = document.querySelectorAll(".txt-box");

txtboxs.forEach((txtbox, index) => {
    txtbox.addEventListener("click", () => {
        txtbox.classList.toggle("active")
    })
})