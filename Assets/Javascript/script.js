
//Grab image
function grabImage(e) {
    let clickImage = e.target.element;
    let imageSrc = e.target.src;
    if(clickImage == "img"){
        return imageSrc;
    }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = grabImage;
  captionText.innerHTML = this.alt;
  console.log(grabImage);
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}