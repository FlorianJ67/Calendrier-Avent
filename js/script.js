const textBoxes = document.querySelectorAll(".txt-box");


// générer un tab de 1 - 24
let numeros = Array.from({length: 24}, (k,v) => v+ 1)
// mélanger aléatoirement le tableau de num
let shuffle = numeros.sort(() => Math.random() - 0.5)
// tab pour les couleurs
let colors = ["green","red","blue","yellow"]

// pour chq elem "txt-box"
textBoxes.forEach((txtBox, index) => {

    // attribuer un num aléatoire à la fenêtre
    txtBox.firstElementChild.innerHTML = shuffle[index]
    // piocher une valeur aléatoire dans le tab de couleurs
    let randomColor = Math.floor(Math.random() * colors.length)
    // ajouter la classe de la couleur à la txtBox courante
    txtBox.classList.add(colors[randomColor])
})


textBoxes.forEach((txtbox, index) => {
    txtbox.addEventListener("click", () => {
        txtbox.classList.toggle("active")
    })
})