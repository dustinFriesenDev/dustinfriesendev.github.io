var x = document.getElementById("offerToggle");
x.innerHTML = "Donate a bear to your local school district, and we'll donate an additional two bears to the same school district.";
   
  function funSomething() {
    if (x.innerHTML === "Thank you for clicking. When you checkout this special offer will apply.") {
      x.innerHTML = "Donate a bear to your local school district, and we'll donate an additional two bears to the same school district.";
    } else {
      x.innerHTML = "Thank you for clicking. When you checkout this special offer will apply.";
    }
}