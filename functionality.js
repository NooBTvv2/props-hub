const track = document.getElementById("image-track");

const click = e => {
  track.dataset.mouseDownAt = e.clientX;
  document.getElementById("Head").innerHTML = "Lol"
  
  for (const image of track.getElementsByClassName("image")) {
    image.animate({
      width: `40vmin`,
      height: `55vmin`,
      opacity: "1"
    }, {duration: 300, fill: "forwards"});
  };
  track.animate({
    transform: `translate(${nextPerc}%, 0%)`
  }, {duration: 600, fill:"forwards"});
}

document.getElementById("but").addEventListener('mousedown', function(e){click})
document.getElementById("but").addEventListener('touchstart', function(e){click})