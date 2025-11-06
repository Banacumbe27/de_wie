

let vocab_data;
let current;
const container=document.querySelector(".container");

const guessing_space=document.createElement('div');
guessing_space.classList.add('guessing-space');

container.appendChild(guessing_space);

const artikel_map={
    "Maskulinum":"der",
    "Femininum":"die",
    "Neutrum":"das",
};

const input=document.createElement('select');
const artikel=["der","die","das"];
artikel.forEach(a=>{
    const option=document.createElement('option');
    option.value=a;
    option.textContent=a;
    input.appendChild(option);
})
guessing_space.appendChild(input);
const word=document.createElement('p');
word.textContent="Loading...";
guessing_space.appendChild(word);
const answer=document.createElement('div');
answer.classList.add("answer");
answer.classList.add("hidden");

container.appendChild(answer);


load_vocab().then(result=>{vocab_data=result.filter(item=>item.type=="Nomen" && item.gender);
    current=randomPull(vocab_data);
word.textContent=current.word.split(', ')[0];
answer.innerHTML=`<strong>${artikel_map[current.gender]} </strong><span>${current.word.split(", ")[0]} : ${current.meaning}</span> - `;
    ;})

function check(){
const chosen=document.querySelector('select').value;
if(artikel_map[current.gender]!=chosen){
    word.textContent='❌'+current.word.split(', ')[0]+'❌';
}
else{
    word.textContent='✅'+current.word.split(', ')[0]+'✅';

}
answer.classList.remove('hidden');
}
function skip(){
    current=randomPull(vocab_data);
    word.textContent=current.word.split(', ')[0];
answer.innerHTML=`<strong>${artikel_map[current.gender]} </strong><span>${current.word.split(", ")[0]} : ${current.meaning}</span> - `;
answer.classList.add('hidden');


}
    const button_row=document.createElement('div');
    button_row.classList.add('button-row');
    const check_button=document.createElement('div');
    check_button.classList.add('button');
    check_button.onclick=check;
    const skip_button=check_button.cloneNode(1);
    skip_button.textContent="Skip";
    skip_button.onclick=skip;
    check_button.textContent="Check";
button_row.appendChild(check_button);
button_row.appendChild(skip_button);
container.appendChild(button_row);
