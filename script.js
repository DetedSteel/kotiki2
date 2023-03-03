const bigImg = document.querySelector('.container')
const select = document.querySelector('.select_container')
const burger = document.querySelector('.burger')

function createSmalImg(cat, parent){
    let img = document.createElement('img')
    img.className = 'smallImg'
    img.src = cat.img_link
    parent.appendChild(img)
}

cats.forEach(cat => createSmalImg(cat, select))

const images = document.querySelectorAll('.smallImg')
const newCats = cats.map(cat => {
    let card = document.createElement('div')
    let h1 = document.createElement('h1')
    let description = document.createElement('p')
    let cat_img = document.createElement('img')
    card.className = 'card'
    h1.innerText = `${cat.name} - ${cat.age} ${cat.age == 1?'год':cat.age <= 4?'года':'лет'}`
    cat_img.src = cat.img_link
    cat_img.className = 'bigImg'
    description.innerText = cat.description
    description.className = 'description'
    card.append(h1,cat_img,description)
    return card
})

console.log(newCats)

function renderCat(src){
    newCats.forEach(cat2 => {
        if (cat2.innerHTML.includes(src)){
            bigImg.appendChild(cat2)
        }
    })
}

images.forEach(i => i.addEventListener('click', function(){
    // let img = document.createElement('img')
    // img.src = i.currentSrc
    // img.className = 'bigImg'
    if (bigImg.childNodes.length == 0){
        renderCat(i.currentSrc)
    } else {
        bigImg.firstChild.remove()
        renderCat(i.currentSrc)
    }
}))

burger.addEventListener('click', () => {
    select.classList.toggle('none')
})