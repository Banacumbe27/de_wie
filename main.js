let vocab;
load_vocab().then(result=>{
    vocab=result
});
//front-end reactive
const subpages={
    "Flashcards - Duy":"./flashcard.html",
}
function load_subpages(subpages){
const mode_select=document.querySelector('.subpage-select');
    const button_labels=Object.keys(subpages);
    button_labels.forEach( label=>{
    const button=document.createElement("div");
    button.classList.add("subpage-button");
    button.textContent=label;
    const linker=document.createElement("a");
    linker.target="_blank";
    linker.href=subpages[label];
    linker.appendChild(button);
    mode_select.appendChild(linker);
    }
    );
}
load_subpages(subpages);