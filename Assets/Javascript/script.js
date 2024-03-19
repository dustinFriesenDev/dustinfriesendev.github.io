// Get the modal, image, main
var modal = document.getElementById("myModal");
const modalImg = document.getElementById("modImg");
const imgParent = document.getElementById("main");
// Get the image and insert it inside the modal - use its "alt" text as a caption
function clickImg(event){
    if(event.target.tagName == "IMG"){
        modal.style.display = "block";
        modalImg.src = event.target.src;
    } else {
        return null;
    }
}
imgParent.addEventListener("click", clickImg);

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}