window.onload = function(){
  
  
  
  let preload = ["3.jpg","cake.png","dance.mp3","flare.jpg","frost.mp3","jack.jpg","lack.mp4","loop2.mp3","main.mp3","sky.jpg","zip.jpg"]
  preloadFiles(preload);
  
  
  
let lan = document.getElementById("click");
lan.addEventListener('animationend',function(){
  setTimeout(() => {
    lan.style.animation = "none";
  void lan.offsetWidth;
  lan.style.animation = "shake 1.0s";
  },2000);
  
});

lan.addEventListener('click', function() {
  lan.style.display = 'none';
});

setTimeout(() => {
  let party = document.getElementById("lack");
  party.style.display = "block";
},7000);

}

function view(){
  let audio = new Audio("frost.mp3");
  audio.play();
  audio.loop = true;
 
  let flip = new Audio('loop2.mp3');
  flip.play();
    let v = document.getElementById("lan");
  v.style.display = 'block';
  
  
}
function preloadFiles(urls){
    urls.forEach(function(url){
      var video = new Audio();
      video.src = url;
      var audio = new Audio();
      audio.src = url;
      var img = new Image();
      img.src = url;
    })
    
  }