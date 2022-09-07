var links = ["https://www.uwa.edu.au/", "https://twitter.com/LiQianTay", "https://twitter.com/ulliecker", "https://twitter.com/uwapsych"];
var weights = [1, 2, 6, 1];  
var totalWeight = weights.reduce(add, 0);  

function add(a, b) { return a + b; } 

var weighedLinks = [];
var currentLink = 0;
while (currentLink < links.length) {
  for (i = 0; i < weights[currentLink]; i++)
    weighedLinks[weighedLinks.length] = links[currentLink];
  currentLink++;
}

function randomizer(){
    var random=Math.floor(Math.random() * totalWeight)
    window.location=weighedLinks[random]
}
 
