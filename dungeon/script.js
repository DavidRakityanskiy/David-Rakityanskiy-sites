const image = document.querySelector("#myImage");
const text = document.querySelector("h2");
const headerText = document.querySelector("#textHeader");

const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");

buttonOne.onclick =  goIn;
buttonTwo.onclick =  leftDungeon;




function leftDungeon()
{
    image.setAttribute("src", "https://pics.livejournal.com/klen_intern/pic/000019ps/s320x240")
    text.textContent = "You have left the dungeon, and now you are a peasant—needed by no one.";

    headerText.textContent ="Ending 1";

    buttonOne.textContent = "START AGAIN";
    buttonOne.addEventListener("click", () => {
    window.location.href = "index.html";
    });

    buttonTwo.style = "display: none";
}


function goIn(){
    image.setAttribute("src", "https://t3.ftcdn.net/jpg/10/03/05/10/360_F_1003051025_cbk7rbo2O0NIKebP7qXRlGHANoUtf84o.jpg")
    text.textContent = "WHAT WILL YOU DO?";

    headerText.textContent ="YOU MEET A MONSTER ON THE WAY.";
    buttonOne.textContent = "FIGHT";
    buttonTwo.textContent = "RUN";
    
    
    
    buttonOne.onclick = win;
    buttonTwo.onclick = death;
}


function death(){
    image.setAttribute("src", "https://media.istockphoto.com/id/1006480588/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D1%83%D1%81%D1%82%D0%BE%D0%B5-%D0%BD%D0%B0%D0%B4%D0%B3%D1%80%D0%BE%D0%B1%D0%B8%D0%B5-%D1%81-%D0%B4%D1%80%D1%83%D0%B3%D0%B8%D0%BC%D0%B8-%D0%BC%D0%BE%D0%B3%D0%B8%D0%BB%D0%B0%D0%BC%D0%B8-%D0%BD%D0%B0-%D0%B7%D0%B0%D0%B4%D0%BD%D0%B5%D0%BC-%D0%BF%D0%BB%D0%B0%D0%BD%D0%B5.jpg?s=612x612&w=0&k=20&c=LNjq_p2eeLlIQA1X7UkRn3J2WKm7YPL0m5GAKI6CmRg=")
    text.textContent = "The monster killed you.";
    headerText.textContent ="Ending 2";

     buttonOne.textContent = "START AGAIN";
    buttonOne.addEventListener("click", () => {
    window.location.href = "index.html";
    });
    buttonTwo.style = "display: none";
 
}

function win(){
    image.setAttribute("src", "https://png.pngtree.com/png-clipart/20250124/original/pngtree-luxurious-red-and-gold-throne-png-image_20315616.png")
    text.textContent = "You killed the monster and became king!";
    headerText.textContent ="Ending 3";

     buttonOne.textContent = "START AGAIN";
    buttonOne.addEventListener("click", () => {
    window.location.href = "index.html";
    });
    buttonTwo.style = "display: none";
 
}



