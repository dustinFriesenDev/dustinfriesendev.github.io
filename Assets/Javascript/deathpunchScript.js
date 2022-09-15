// each variable hold text to be displayed in mainDisplay. Instead of three pages, there's one page with three text boxes displayed when clicked on nav buttons at the bottom of the page.
var x = document.getElementById("mainDisplay");
x.innerHTML = "Welcome to DeathPunch. Learn quickly, fear the darkness, and if all else fails try the stupidest thing you can think of.";
var home = "Welcome to DeathPunch. Learn quickly, fear the darkness, and if all else fails try the stupidest thing you can think of." 
var about = "DeathPunch is a text-based game that started as part of a larger riddle and puzzle game my brother crafted during Christmas for the family to get additional presents. (Don't worry. He helped us if we got stuck, which we did...a lot. And we got the presents in the end.) <br> After a couple years of playing this part of the game, I was inspired to post it. So this is the original game, with a few less bugs and probably a few more we accidenltly added. So fight your way through monsters, survive in the dark as the darkness burns your flesh, and get to the end to face Death. Sadily, there are no presents at the end of the game, just those famous two words, 'The End'. But hoping you have some fun along the way, too. <br> Good luck!"
var term = "A warning. Grammar does not exist in the world of DeathPunch. If you think there should be a comma, or your phrase should be a full sentence -- you're probably wrong. It won't hender your gameplay, but I don't want you to get caught up thinking you're missing grammar when you're most likely not using the correct word. Keep it simple."

  function homePage() {
    return x.innerHTML = home;
  }

  function aboutPage() {
    return x.innerHTML = about;
  }

  function termPage() {
    return  x.innerHTML = term;
  }

  //the iframe for the game is initially hidden and this shows the iframe onclick.
  function gameReveal() {
    document.getElementById("game").style.display = "block";
    document.getElementById("disclaimer").style.display = "block";
    document.querySelector("button.str-button").style.display = "none";
  }