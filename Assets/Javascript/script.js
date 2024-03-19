// Get the modal, image, main, body
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("modImg");
const imgParent = document.getElementById("main");
const body = document.querySelector("body");
console.log(body);
// Insert image inside the modal
function clickImg(event){
    if(event.target.tagName == "IMG"){
        modal.style.display = "block";
        modalImg.src = event.target.src;
        body.style.overflow = "hidden";
    } else {
        return null;
    }
}
// Listener to get image clicked
imgParent.addEventListener("click", clickImg);

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When modal is clicked image closes
modal.onclick = () => {
  modal.style.display = "none";
  body.style.overflow = "visible";
}