
const type=document.querySelector(".type");
const genus=document.querySelector(".word_container strong");
const word_display=document.querySelector(".word_container p");
const meaning=document.querySelector(".meaning");
const example=document.querySelector(".example");
const search_container=document.querySelector('.search_results');
const search_input=document.querySelector('.search input');

const genus_map={
    "Femininum":"Die",
    "Maskulinum":"Der",
    "Neutrum":"Das",
    "Both":"Der/Die"
}
let vocab_data;
let search_data;
load_vocab().then(result=>{
    vocab_data=result;
    console.log(result);
})

function search(content){
    if(content!=""){
    let result=[];
    content=content.toLowerCase();
    vocab_data.forEach(w=>{
        if(w.word.toLowerCase().includes(content))result.push(w);
        })
    return result;
    }
    
}
function display_search_result(result){
    search_container.innerHTML="";
result.forEach(item=>{
result_item=document.createElement('div');
result_item.textContent=item.word+"-"+item.type.slice(0,3)+".";
search_container.onclick=document.body.onclick=()=>{
search_container.classList.add("dict-hidden");
};
result_item.onclick=e=>{
display_word(item);
}
search_container.appendChild(result_item);
})
}
function display_word(data){
type.textContent=data.type;
genus.textContent=data.gender?genus_map[data.gender]:"";
meaning.textContent=data.meaning;
word_display.textContent=data.word;
// example.textContent=data.example;
}
search_input.oninput=e=>{
search_container.classList.remove("dict-hidden");
    
    display_search_result(search(search_input.value));}