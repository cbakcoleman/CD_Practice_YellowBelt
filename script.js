//counter
function addLikes(id){
    var count = parseInt(document.querySelector(id).innerHTML);
    document.querySelector(id).innerHTML = count+1;
}

//change text
function logout(e) {
    e.innerText = "Logout"
}

//remove
function remove(e) {
    e.remove();
}

//search alert
function search(){
    var input = document.querySelector("#search").nodeValue;
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