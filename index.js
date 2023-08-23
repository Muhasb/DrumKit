// DETECTING BUTTON PRESS
// To make functionable all the buttons creating a for loop
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrumButtons;i++){
// making the button functionable
document.querySelectorAll(".drum")[i].addEventListener("click", gotclicked);
function gotclicked(){ //created a function which will give msg that it got clicked
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

    // this.style.color = "white";
}
}
// DETECTING KEYBOARD PRESS 
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "m":
            var tom1 = new Audio("tom-1.mp3");
            tom1.play()
            break;
            case "k":
                var tom2 = new Audio("tom-2.mp3");
                tom2.play()
                break;
                case "i":
                    var tom3 = new Audio("tom-3.mp3");
                    tom3.play()
                    break;
                    case "s":
                        var tom4 = new Audio("tom-4.mp3");
                        tom4.play()
                        break;
                        case "h":
                            var snare = new Audio("snare.mp3");
                            snare.play()
                            break;
                            case "e":
                                var crash = new Audio("crash.mp3");
                                crash.play()
                                break;
                                case "r":
                                    var kick = new Audio("kick-bass.mp3");
                                    kick.play()
                                    break;
                                    default: console.log(buttonInnerHTML);
                                        
                                }
                            }
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed");}, 100);
}


