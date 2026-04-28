const button = document.querySelector(".btn");
const answers= document.querySelectorAll(".answer");

button.addEventListener("click", result);

const par = document.querySelector("#show");

function result(e) {
    e.preventDefault();

    let points = 0;

    answers.forEach( answer => {
      if (answer.checked) points++;
    })

    if (points === 5) par.textContent = points+ " Верных ответов. Все в порядке!" ;
    if (points === 0){ par.textContent =  points + " Верных ответов. ВНИМАНИЕ ВЫ В СИМУЛЯЦИИ! БЕГИТЕ ГОЛУБЦЫ!";} else 
    if (points < 3) par.textContent =  points + " Верных ответов. Вам стоит серьезно задуматься о том реальны ли вы в принципе?";
    
    

}