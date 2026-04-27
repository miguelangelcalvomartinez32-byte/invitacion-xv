const musica=document.getElementById("musica");
const icono=document.getElementById("icono");
let reproduciendo=false;

function entrar(){
    let inicio=document.getElementById("inicio");
    inicio.style.opacity="0";
    setTimeout(()=>inicio.style.display="none",1000);
    iniciarMusica();
}

function toggleMusica(){
    if(!reproduciendo){
        iniciarMusica();
    }else{
        musica.pause();
        icono.innerHTML="▶";
        reproduciendo=false;
    }
}

function iniciarMusica(){
    musica.volume=0;
    musica.play();

    let vol=0;
    let fade=setInterval(()=>{
        if(vol<0.8){
            vol+=0.05;
            musica.volume=vol;
        }else clearInterval(fade);
    },200);

    icono.innerHTML="⏸";
    reproduciendo=true;
}

/* partículas */
const magia=document.getElementById("magia");

for(let i=0;i<50;i++){
    let p=document.createElement("div");
    p.classList.add("particula");
    p.style.left=Math.random()*100+"vw";
    p.style.animationDuration=(Math.random()*4+3)+"s";
    magia.appendChild(p);
}

/* contador */
const cuenta=document.getElementById("cuenta");
const fecha=new Date("August 1, 2026 13:00:00").getTime();

setInterval(()=>{
    let diff=fecha-new Date().getTime();
    let d=Math.floor(diff/(1000*60*60*24));
    let h=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    cuenta.innerHTML=`${d} días · ${h} hrs`;
},1000);