const signs = ["Pierre", "Papier", "Ciseau"];
let signsBtn = document.querySelectorAll(".select");
let userChoice = "";
let countManche = 0;
let countParti = 0;
let countPoint = 0; 


const randomSigns = (array) => {
    let randomNumber = Math.floor(Math.random() * Math.floor(3));
    return array[randomNumber];
}

for(let i =0; i<signsBtn.length; i++){
    signsBtn[i].addEventListener('click', (event) => {
     userChoice = event.target.id;
     console.log(chiFuMi(randomSigns(signs), userChoice));
  })
}


const chiFuMi = (a, b) => { 
    if(a === b){
        return "you are the same sings";
    }
 switch (a) {
    case "Pierre":
        if(b == "Papier"){
            return "you are win";
        }
        else{
            return "you are loose";
        }
        break;
    case "Papier":
        if(b == "Ciseau"){
            return "you are win";
        }
        else{
            return "you are loose";
        }
        break;
    case "Ciseau":
        if(b == "Pierre"){
            return "you are win";
        }
        else{
            return "you are loose";
        }
        break;
    }
}




