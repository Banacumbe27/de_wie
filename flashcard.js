const flashcard=document.createElement('div');
flashcard.classList.add('flashcard');
flashcard.id=0;
flashcard.textContent="Loading..."
flashcard.onclick=e=>{
    flipcard(e);

};
const container=document.querySelector('.container');

const next_button=document.createElement("div");
next_button.classList.add('next-button');
next_button.textContent="NEXT";
container.appendChild(flashcard);
container.appendChild(next_button);
next_button.onclick=()=>{
next()
};
function next(){
flashcard.id='0';
current=randomPull(vocab_data);
flashcard.classList.add('next');
setTimeout(()=>{
flashcard.textContent=current.word;
flashcard.classList.remove('next');
},250);
}
document.onkeyup=e=>{
if(e.key=='Enter'){
    next();
}
};


function flipcard(e){
flashcard.textContent=""

    flashcard.classList.add('flipped');
    setTimeout(()=>{flashcard.classList.remove('flipped');
        if(flashcard.id==0){
        flashcard.id=1;
        flashcard.textContent=`${current.type}-${current.gender}-${current.meaning}`;
    }
   else if(flashcard.id==1){
        flashcard.id=0;
        flashcard.textContent=current.word;
    }



    },250);


}

function randomPull(array){
    return array[Math.floor(Math.random()*array.length)]
}
let vocab_data;
load_vocab().then(result=>{vocab_data=result
current=randomPull(vocab_data);
flashcard.textContent=current.word;
});

let current={word:"Loading..."};

