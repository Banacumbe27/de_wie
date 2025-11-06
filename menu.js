let host;
if(document.querySelector(".container"))host=document.querySelector('.container');
else {
    host=document.createElement("div");
    host.classList.add('container');
    document.body.appendChild(host);
}



function create_menu(){
const menu=document.createElement('div');
menu.classList.add('menu');
const menu_button=document.createElement('div');
menu_button.textContent="☰";
menu_button.classList.add('menu-button');

const menu_panel=create_menu_panel();

menu_button.onclick=()=>{
  
    if(menu_panel.id=="1"){menu_panel.classList.remove('hidden');menu_panel.id=0;}
    else if(menu_panel.id=="0"){menu_panel.classList.add('hidden');menu_panel.id=1;}
};
menu.appendChild(menu_button);
menu.appendChild(menu_panel);
host.appendChild(menu);
}
function create_menu_panel(){
const menu_panel = document.createElement('div');
menu_panel.classList.add('menu-panel');
menu_panel.classList.add('hidden');
menu_panel.id='1';
const refresh_button=document.createElement('div');
refresh_button.classList.add('menu-panel-button')
refresh_button.textContent="Refresh data";
refresh_button.onclick=async ()=>{
    refresh_button.style.pointerEvents="none";
    refresh_button.textContent="Reloading..."
    await load_vocab(force=true);
    location.reload();
    refresh_button.style.pointerEvents="auto";
}
const branch=document.createElement('p');
let url_data=window.location.href.split('/');
let domain=url_data.slice(0,3).join("/");
url_data=url_data.slice(3,url_data.length);
url_data.unshift('de_wie');
url_data.forEach(data=>{
const link=document.createElement('a');
link.textContent=data+"/";
data=data=='de_wie'?"":data;
link.href=domain+"/"+data;
branch.appendChild(link)
});
menu_panel.appendChild(branch);
menu_panel.appendChild(refresh_button);

return menu_panel;
}
create_menu();