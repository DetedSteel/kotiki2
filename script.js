const bigImg = document.querySelector('.container')
const select = document.querySelector('.select_container')
const burger = document.querySelector('.burger')

function createSmalImg(src, parent){
    let img = document.createElement('img')
    img.className = 'smallImg'
    img.src = src
    parent.appendChild(img)
}

data.forEach(src => createSmalImg(src, select))

const images = document.querySelectorAll('.smallImg')

images.forEach(i => i.addEventListener('click', function(){
    let img = document.createElement('img')
    img.src = i.currentSrc
    img.className = 'bigImg'
    if (bigImg.childNodes.length == 0){
        bigImg.appendChild(img)
    } else {
        bigImg.firstChild.remove()
        bigImg.appendChild(img)
    }
}))

burger.addEventListener('click', () => {
    select.classList.toggle('none')
})