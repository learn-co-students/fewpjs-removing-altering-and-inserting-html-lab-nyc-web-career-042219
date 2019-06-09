// Write your code here!

var elem = document.getElementById('main');
elem.parentNode.removeChild(elem);

var newHeader = document.createElement('h1')
newHeader.setAttribute("id", "victory")
newHeader.innerHTML = "Ashley is the champion"
