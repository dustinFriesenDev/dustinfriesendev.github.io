// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const collectionImages = document.querySelectorAll("img");
let imgId;
let tarTagName;
const imageId = e => {
    console.log(e.target.id);
}
function myTag(event){
    tarTagName = event.target.tagName;
}

for (let imageId of collectionImages){
    imageId.addEventListener("click", imageId)
}

const sortImages = () => {
    for (const singleImg of collectionImages){
        if(singleImg.id == imgId){
            return singleImg;
        }
    }
}

var img = document.getElementById("img1");
var modalImg = document.getElementById("modImg");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img.src;
}

const imgParent = document.getElementById("main");
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