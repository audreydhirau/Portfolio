const darkTheme = document.getElementById("light")
const body = document.body

darkTheme.addEventListener("click", function(event){
    event.preventDefault();
    body.classList.toggle('black')
   
})