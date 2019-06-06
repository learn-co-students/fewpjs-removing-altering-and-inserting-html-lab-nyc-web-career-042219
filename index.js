let body = document.querySelector('body')
body.removeChild(body.querySelector("main#main"))

let newHeader = document.createElement('h1')
newHeader.id = "victory"
newHeader.innerHTML = "YOUR-NAME is the champion"
