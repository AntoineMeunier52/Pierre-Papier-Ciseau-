const signs = ["Pierre", "Papier", "Ciseau"];
let signsBtn = document.querySelectorAll(".select");
let userChoice = "";

let countGame = 0;
let countRound = 0;
let pointIa = 0;
let pointUser = 0;

let numberManche = document.querySelector("#number-round");
let numberParti = document.querySelector("#number-game");
let scoreIa = document.querySelector("#numberIa"); 
let scoreUser = document.querySelector("#numberUser");

numberManche.textContent = countGame.toString();
numberParti.textContent = countRound.toString();


let pcReaction = "";
let messageForUser = document.querySelector("#dev-message");


let signsIa = document.querySelector("#signs-img-ia");
let signsUser = document.querySelector("#signs-img-user");
let imgIa = "";
let imgUser = "";


const randomSigns = (array) => {
    let randomNumber = Math.floor(Math.random() * Math.floor(3));
    if(array[randomNumber] === "Pierre"){
        imgIa = "assets/pierre.png";
    }
    else if(array[randomNumber] === "Papier"){
        imgIa = "assets/feuilles.png";
    }
    else{
        imgIa = "assets/ciseau.png";
    }
    return array[randomNumber];
}


    for(let i =0; i<signsBtn.length; i++){
        signsBtn[i].addEventListener('click', (event) => {
        userChoice = event.target.id;
        if(userChoice === "Pierre"){
            imgUser = "assets/pierre.png";
        }
        else if(userChoice === "Papier"){
            imgUser = "assets/feuilles.png";
        }
        else{
            imgUser = "assets/ciseau.png";
        }
        chiFuMi(randomSigns(signs), userChoice);

        scoreIa.textContent = pointIa.toString();
        scoreUser.textContent = pointUser.toString();

        messageForUser.textContent = pcReaction;

        signsIa.src = imgIa;
        signsUser.src = imgUser;
        
        if(pointIa ===  3 || pointUser === 3){
            countRound = 0;
            pointIa = 0;
            pointUser = 0;
            countGame += 1; 
        }

        numberManche.textContent = countRound.toString();
        numberParti.textContent = countGame.toString();
        })
    }


const chiFuMi = (a, b) => { 
    countRound += 1;
    if(a === b){
        pcReaction = "OH! you are the same signs of me";
        return "you are the same sings";
    }
 switch (a) {
    case "Pierre":
        if(b == "Papier"){
            pointUser += 1;
            pcReaction = "OH not bad human";
            return "you are win";
            
        }
        else{
            pointIa += 1;
            pcReaction = "You are so bad";
            return "you are loose";
        }
        break;
    case "Papier":
        if(b == "Ciseau"){
            pointUser += 1;
            pcReaction = "You improve human";
            return "you are win";
        }
        else{
            pointIa += 1;
            pcReaction = "So human, too bad";
            return "you are loose";
        }
        break;
    case "Ciseau":
        if(b == "Pierre"){
            pointUser += 1;
            pcReaction = "Oh no human pls, i will lose";
            return "you are win";
        }
        else{
            pointIa += 1;
            pcReaction = "not this time human";
            return "you are loose";
        }
        break;
    }
}

const darkMode = document.querySelector("body");
const btnDArhMode = document.querySelector("#icon-dark-mode");

btnDArhMode.addEventListener('click', (event) => {
    darkMode.classList.toggle("dark-mode");
});

const btnReset = document.querySelector("#btnreset");

btnReset.addEventListener('click', () => {
    console.log("coucou");
    countGame = 0;
    countRound = 0;
    pointIa = 0;
    pointUser = 0;
    scoreIa.textContent = pointIa.toString();
    scoreUser.textContent = pointUser.toString();
    numberManche.textContent = countRound.toString();
    numberParti.textContent = countGame.toString();
});