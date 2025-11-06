
async function fetch_data(){
    const backend_url="https://script.google.com/macros/s/AKfycbylI-2icxT84JGr4l2PeSH9a5Z6NOSo3GGz97L-a9Nc0sKZwQoZ0Y7cquAKMyVG8rM/exec"
    return fetch(backend_url)
    .then(res=>res.json());
}
async function load_vocab(force=false){
    let saved_data=JSON.parse(localStorage.getItem("de_wie"));
    let deltaTime_min=null;
    if(saved_data){deltaTime_min=(new Date()-new Date(saved_data.date))/60000;}
    const timeout=10;
    if(!saved_data || deltaTime_min && deltaTime_min>timeout || force){
        saved_data={
            date:new Date(),
            vocab:""
        }
        vocab_data= await fetch_data();
        saved_data.vocab=vocab_data;
        localStorage.setItem("de_wie",JSON.stringify(saved_data))
    }
    return saved_data.vocab;
}

function randomPull(array){
    return array[Math.floor(Math.random()*array.length)]
}