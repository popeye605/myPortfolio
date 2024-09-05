function hamburg(){
    const navbar=document.querySelector(".dropdown")
    console.log(navbar);
    navbar.style.transform="translateY(0px)"
}
function cancel(){
    const navbar=document.querySelector(".dropdown")
    navbar.style.transform="translateY(-500px)"
}
const texts=[
"   SOC ANALYST",
"   WEB DEVELOPER",
"   WEB PENTESTER"
];
let speed=100;
const textElements=document.querySelector(".typewriter-text");
let textIndex=0;
let charcterIndex=0;
function typewriter(){
    if(charcterIndex<texts[textIndex].length){
        textElements.innerHTML+=texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typewriter,speed);

    }
    else{
        setTimeout(eraseText,1000)
    }

}
function eraseText(){
    if(textElements.innerHTML.length>0){
        textElements.innerHTML=textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText,50);
    }
    else{
        textIndex=(textIndex+1)%texts.length;
        charcterIndex=0;
        setTimeout(typewriter,500);
    }
    

}
typewriter();




function showDetails(serviceId) {
    // Hide header text
    document.getElementById("headerText").style.display = "none";

    // Hide all service cards
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.style.display = "none";
    });

    // Show the selected service details
    document.getElementById(serviceId).style.display = "block";
}

function goBack() {
    // Show header text
    document.getElementById("headerText").style.display = "block";

    // Show all service cards
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.style.display = "block";
    });

    // Hide all service details
    const details = document.querySelectorAll(".service-details");
    details.forEach(detail => {
        detail.style.display = "none";
    });
}
