const image = document.querySelector("#myImage");
const text = document.querySelector("h2");
const headerText = document.querySelector("#textHeader");

const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");

buttonOne.onclick =  Question1;

let score = 0;


function Question1()
{
    image.setAttribute("src", "https://sweetbiscuit.ru/upload/iblock/299/29959b5e6b3ff63b620f84c0f320acfb.jpg")
    text.textContent = "Do you like cakes?";

    headerText.textContent = "Question 1";

    buttonOne.style.display = "block";
    buttonTwo.style.display = "block";

    buttonOne.onclick =  function(){
        score = score + 1;
         Question2();

    };
    buttonTwo.onclick =  Question2;
}


function Question2(){
    image.setAttribute("src", "https://images5.alphacoders.com/495/thumb-1920-495155.jpg")
    text.textContent = "Do you like Jake?";

    headerText.textContent ="Question 2";


    buttonOne.style.display = "block";
    buttonTwo.style.display = "block";
    
    buttonOne.onclick =  function(){
        score = score + 1;
         Question3();

    };
    buttonTwo.onclick =  Question3;
}

function Question3(){
    image.setAttribute("src", "https://m.media-amazon.com/images/S/pv-target-images/a489d9768a3b0a38e5176a7e382d956d492ad03ac5eed71db958ac150167e7d4.jpg")
    text.textContent = "Do you like Bubblegum?";

    headerText.textContent ="Question 3";


    buttonOne.style.display = "block";
    buttonTwo.style.display = "block";
    
    buttonOne.onclick =  function(){
        score = score + 1;
         Scorecheck();

    };
    buttonTwo.onclick =  Scorecheck;
 
}

function Scorecheck() {
    if (score >= 3) {
        Score3(); 
    } 
    else if (score == 2) {
        Score2(); 
    } 
    else if (score == 1) {
        Score1(); 
    } 
    else {
        Score0(); 
    }
}

function Score3() {
    image.setAttribute("src", "https://preview.redd.it/whos-your-favorite-character-and-why-is-it-finn-v0-x9fsn7kj5ehc1.jpg?width=1920&format=pjpg&auto=webp&s=ef3d6be1eb3b596b7c3df0f4c85545d440f831a0")
    text.textContent = "You're a Finn!";
    headerText.textContent ="Congratulations!";

    buttonOne.textContent = "START AGAIN";
    buttonOne.addEventListener("click", () => {
    window.location.href = "index.html";
    });
    buttonTwo.style = "display: none";
}

function Score2() {
    image.setAttribute("src", "https://static0.cbrimages.com/wordpress/wp-content/uploads/2018/08/jake-the-dog-pure-css-adventure-time-wallpaper-by-sangreprimitiva-d5vs51f.jpg")
    text.textContent = "You're a Jake.";
    headerText.textContent ="Congratulations!";

    buttonOne.textContent = "START AGAIN";
    buttonOne.addEventListener("click", () => {
    window.location.href = "index.html";
    });
    buttonTwo.style = "display: none";
}

function Score1() {
    image.setAttribute("src", "https://i.ytimg.com/vi/vYyvuz089mw/maxresdefault.jpg")
    text.textContent = "Lumpy Space Princess!";
    headerText.textContent ="Congratulations!";

    buttonOne.textContent = "START AGAIN";
    buttonOne.addEventListener("click", () => {
    window.location.href = "index.html";
    });
    buttonTwo.style = "display: none";
}

function Score0() {
    image.setAttribute("src", "https://pixel.disco.nowtv.com/uuid/88a15ff0-d842-3a97-813d-099e7757635e/LAND_16_9?language=en-GB&proposition=NOWOTT&version=be8295e5-70c0-3e92-8fcb-653b488a8692")
    text.textContent = "You're a lemonking!";
    headerText.textContent ="Congratulations!";

    buttonOne.textContent = "START AGAIN";
    buttonOne.addEventListener("click", () => {
    window.location.href = "index.html";
    });

    buttonTwo.style = "display: none";
}