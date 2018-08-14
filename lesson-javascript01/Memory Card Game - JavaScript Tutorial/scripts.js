const cards = document.querySelectorAll('.memory-card');

let hasFlippedCar=false;
let firstCard, secondCard;

function flipCard(){
    this.classList.toggle('flip');
    
}
    if (!hasFlippedCard){
    //first click
        hasFlippedCard=true;
        firstCard=this;
    else{
        hasFlippedCar=false;
        secondCard = this;

        chackForMatch();
    }
}

function checkForMatch(){
    //do cards match?
        if (firstCard.dataset.framework === 
            secondCard.dataset.framework{
             //it's a match!
             firstCard.removeEventListener('click', flipCard);
             secondCard.removeEventListener('click', flipCard);
        }else{
            //not a match!
            setTimeout(()=> {
            firstCard.ClassList.remove('flip');
            secondCard.ClassList.remove('flip');   
            },1500);
        }

}




cards.forEach(card=> card.addEventListener('click', flipCard))