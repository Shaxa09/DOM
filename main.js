const boxes = document.querySelectorAll('.box')

boxes.forEach((box) => {
    box.onmouseenter = () => {
        box.classList.add('active')
    }
    box.onclick = () => {
        box.classList.toggle('focus')
    }
})