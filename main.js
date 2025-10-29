const flashcard=document.createElement('div');
flashcard.classList.add('flashcard');
flashcard.id=0;
flashcard.textContent="Loading..."
flashcard.onclick=e=>{
    flipcard(e);

};
const container=document.querySelector('.container');
container.appendChild(flashcard);

const next_button=document.querySelector('.next-button');
next_button.onclick=(e)=>{
console.log(vocab_data);
flashcard.id='0';
current=randomPull(vocab_data);
flashcard.classList.add('next');
setTimeout(()=>{
flashcard.textContent=current.word;
flashcard.classList.remove('next');
},500);

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

function fetch_data(){
    const backend_url="https://script.google.com/macros/s/AKfycbylI-2icxT84JGr4l2PeSH9a5Z6NOSo3GGz97L-a9Nc0sKZwQoZ0Y7cquAKMyVG8rM/exec"
    fetch(backend_url)
    .then(res=>res.json())
    .then(data=>{
        vocab_data=data;
        current=randomPull(vocab_data);
        flashcard.textContent=current.word;
        document.querySelector(".cover").style.display='none' ;
    });
}
function randomPull(array){
    return array[Math.floor(Math.random()*array.length)]
}
let vocab_data;
let current={word:"Loading..."};

fetch_data();
