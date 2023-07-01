// Detecting if the button is clicked

var numOfDrum = document.querySelectorAll(".drum").length;
for(var i=0; i<numOfDrum; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;       
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}


// Detecting if the key is pressed
document.addEventListener("keydown",function(event){
    playSound(event.key);
    buttonAnimation(event.key);
});


// playing sound as per the button clicked or key pressed

function playSound (key)
{
    switch(key)
        {
            case "a" :
                var crash = new Audio("./sounds/crash.mp3");
                crash.play();
                break;
            case "s" :
                var kickbass = new Audio("./sounds/kick-bass.mp3");
                kickbass.play();       
                break;
            case "d" :
                var snare = new Audio("./sounds/snare.mp3");
                snare.play();
                break;
            case "f" :
                var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
                break;
            case "j" :
                var tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
                break;
            case "k" :
                var tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
                break;
            case "l" :
                var tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play();
                break;
            default : 
                console.log(buttonInnerHTML);
        }
}

// adding animation to the button just by adding a class which changes its properties 
// and then by setting timeout we remove the class added so that it looks like an animation

function buttonAnimation(key)
{
    var currKey = document.querySelector("." + key);
    currKey.classList.add("pressed");

    setTimeout(function(){
        currKey.classList.remove("pressed");
    }, 100);
}

