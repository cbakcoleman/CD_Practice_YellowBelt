//counter
function addLikes(id){
    var count = parseInt(document.querySelector(id).innerHTML);
    document.querySelector(id).innerHTML = count+1;
}

//change text  xx
function noRecipes(e) {
    e.innerText = "No recipes for you!"
}

//remove    xx
function remove(e) {
    e.remove();
}

//search alert     xx
function search(){
    var input = document.querySelector("#search").value;
    alert(`You have searched for ${input}`)
}

//hover play
var video = document.querySelector(".video");

video.addEventListener("mouseover",
function(e){
    video.play()
})

video.addEventListener("mouseout",
    function(e){
        video.pause()
    })