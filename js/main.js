const cardButton = document.querySelector("#card-button");
const modal= document.querySelector(".modal")
const close= document.querySelector(".close")
cardButton.addEventListener("click",function(event){
modal.classList.add("isOPen")
})

close.addEventListener("click",function(event){
modal.classList.remove("isOPen")
})


new WOW().init();