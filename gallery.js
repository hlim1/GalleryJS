var chico = [
             {description: "Chico state",
              picture: "http://www.csuchico.edu/_assets/images/banners/about-desktop.jpg",
              source: "csuchico.edu"},
             {description: "Upper Bidwell Park",
              picture: "http://bidwellpark.org/wp-content/uploads/2014/04/BidwellChicoCreek.jpg", 
              source: "bidwellpark.org"}, 
             {description:"Monkey face", 
              picture: "http://1.bp.blogspot.com/-lYUoGFBMLk0/VBkLkmjVEjI/AAAAAAAACHE/PQ3s_e9-JIY/s1600/MonkeyFace_UpperBidwellPark.jpg",
              source: "http://trailingahead.blogspot.com/2014/09/monkey-face-in-upper-bidwell-park-east.html"},
             {description: "One mile",
              picture: "http://media-cache-ec0.pinimg.com/736x/6e/fc/49/6efc49e16554dc1d67da1b9257680157.jpg", 
              source: "https://www.pinterest.com/pin/367043438351626082/"},
             {description: "Downtown",
              picture: "http://media-cache-ec0.pinimg.com/736x/8c/4a/37/8c4a3760031fe98b3bf3d3bb71add3a7.jpg",
              source: "https://www.pinterest.com/pin/232920611947846912/"}
            ];
var current = "";

function shuffleGallery()
{
  var arraySize = chico.length;
  var rand = Math.floor(Math.random() * arraySize); // Generates random number between 0 and arraysize.
  console.log(rand);

  while (current == chico[rand])
  {
     rand = Math.floor(Math.random() * arraySize);
  }
  current = chico[rand];
  document.getElementById("caption").style.fontWeight = 900;
  document.getElementById("caption").style.color = "blue";
  document.getElementById("caption").innerHTML = chico[rand].description;

  document.getElementById("picture").src = chico[rand].picture;

  document.getElementById("source").style.fontWeight = 900;
  document.getElementById("source").style.color = "blue";
  document.getElementById("source").innerHTML = chico[rand].source;
}
