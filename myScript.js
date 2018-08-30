function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function printTime() {
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (secs < 10) {
    secs = "0" + secs;
  }
  document.getElementById("hora").innerHTML = hours + ":" + mins + ":" + secs;
}
function playmusic() {
  var audioElement = document.createElement("audio");
  audioElement.setAttribute("src", "clock.mp3");
  audioElement.play();
  console.log("play");
}
setInterval(playmusic, 2000);
setInterval(printTime, 1000);
