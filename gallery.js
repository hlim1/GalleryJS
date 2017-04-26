var chico = ["Chico state", "Upper Bidwell Park", "Monkey face", "One mile", "Downtown"];
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
  console.log(current);
}
