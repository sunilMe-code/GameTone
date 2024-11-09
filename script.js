let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let item = document.querySelector(".item")
let img = document.querySelector(".item img");
let Btn = document.querySelectorAll(".category i");
let listCard = document.querySelector(".category .list-card");
let scrollBar = document.querySelector(".category .scroll-bar");
let thumbScrollbar = scrollBar.querySelector(".scrollbar-thumb");
let darkMode = document.querySelector("#dark-mode");
let Mode = document.querySelector("#mode");


//  draggin cards on mobile
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft

const dragStart = (e)=>{
   isDragStart = true
   prevPageX =  e.touches[0].pageX
   prevScrollLeft = listCard.scrollLeft
}

const dragging = (e)=>{
  if(!isDragStart) return;
 e.preventDefault()
 isDragging = true
 listCard.classList.add('dragging')
 let positionDiff = e.touches[0].pageX - prevPageX
 listCard.scrollLeft = (prevScrollLeft - positionDiff) 
}

const dragStop = ()=>{
  isDragStart = false
  listCard.classList.remove('draggin')

  if(!isDragging) return;
  isDragging = false;
}

listCard.addEventListener("touchmove", dragging)
listCard.addEventListener("touchstart", dragStart)
listCard.addEventListener("touchend", dragStop)



"use strict"

let maxScrollLeft = listCard.scrollWidth - listCard.clientWidth

next.addEventListener('click', function () {
  let items = document.querySelectorAll('.item')
  document.querySelector('.slide').appendChild(items[0]);
})

prev.addEventListener('click', function () {
  let items = document.querySelectorAll('.item')
  document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})


const showBtn = (e) => {
  let direction = e.target.id === "prev" ? -1 : 1;
  let scrollAmount = listCard.clientWidth * direction
  listCard.scrollBy({ left: scrollAmount, behavior: "smooth" })
}

Btn.forEach(Button => {
  Button.addEventListener('click', showBtn)
})

thumbScrollbar.addEventListener("mousedown", (e) => {
  let startX = e.clientX
  let thumbPosition = thumbScrollbar.offsetLeft;


  const handleMouseMove = (e) => {
    const deltaX = e.clientX - startX
    const newThumbPosition = thumbPosition + deltaX
    const maxThumbPosition = scrollBar.getBoundingClientRect().width - thumbScrollbar.offsetWidth;


    const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
    const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft



    thumbScrollbar.style.left = `${boundedPosition}px`
    listCard.scrollLeft = scrollPosition
  }

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove)
    document.removeEventListener("mouseup", handleMouseUp)
  }

  document.addEventListener("mousemove", handleMouseMove)
  document.addEventListener("mouseup", handleMouseUp)
})

const updateScrollThumpPosition = () => {
  const scrollPosition = listCard.scrollLeft;
  const thumbPosition = (scrollPosition / maxScrollLeft) * (scrollBar.clientWidth - thumbScrollbar.offsetWidth);
  thumbScrollbar.style.left = `${thumbPosition}px`
}

listCard.addEventListener("scroll", () => {
  updateScrollThumpPosition()
});


// controle to hover
contactUsHover=(contactUs)=>{
  contactUs.style.color = ""
}

contactUsOut = (contactUs)=>{
       contactUs.style.color = ""
}

// DarkMode
darkMode.addEventListener("click",  (e)=>{
  var body = document.body;
let nav = document.querySelector("nav")
let footer = document.querySelector(".footer")

// dark-mode for body
  body.classList.toggle("deep");

  contactUsHover=(x)=>{
    x.style.borderBottom = "1px solid rgb(255 , 255, 255)"
  }

  contactUsOut = (x)=>{
    x.style.borderBottom = ""
  }

  if(darkMode.style.backgroundColor === "white"){
    darkMode.style.backgroundColor  = "black";
    nav.style.backgroundColor = ""
    footer.style.backgroundColor = ""
    darkMode.classList.remove("ri-sun-line");
    darkMode.classList.add("ri-moon-line");
  }else{
    darkMode.style.backgroundColor  = "white"
     nav.style.backgroundColor = "rgb(20, 19, 19)"
     footer.style.backgroundColor = "rgb(6, 2, 2"
    darkMode.classList.remove("ri-moon-line");
    darkMode.classList.add("ri-sun-line");
  }
})

  






 












