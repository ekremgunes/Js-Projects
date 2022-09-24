
var LoadOverlay = document.querySelector("#load-overlay");

setTimeout( () => {

    LoadOverlay.classList.add('clearLoad');//first animation
    setTimeout(() => {
        LoadOverlay.remove();//last delete on the page
    },700)//this duration must be same with animaton duration

},1600);
