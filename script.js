const musica = document.getElementById("musica");
const boton = document.querySelector(".musica");
const icono = document.getElementById("icono");

let reproduciendo = false;

/* 🎬 entrar */
function entrar(){
    document.getElementById("inicio").style.display = "none";
    iniciarMusica();
}

/* 🎵 música */
function toggleMusica(){
    if(!reproduciendo){
        iniciarMusica();
    }else{
        musica.pause();
        boton.classList.remove("playing");
        icono.innerHTML = "▶";
        reproduciendo = false;
    }
}

function iniciarMusica(){
    musica.volume = 0;
    musica.play();

    let vol = 0;
    let fade = setInterval(()=>{
        if(vol < 0.8){
            vol += 0.05;
            musica.volume = vol;
        }else{
            clearInterval(fade);
        }
    },200);

    boton.classList.add("playing");
    icono.innerHTML = "⏸";
    reproduciendo = true;
}

/* contador */
const cuenta = document.getElementById("cuenta");
const fecha = new Date("August 1, 2026 13:00:00").getTime();

setInterval(()=>{
    let ahora = new Date().getTime();
    let diff = fecha - ahora;

    let d = Math.floor(diff/(1000*60*60*24));
    let h = Math.floor((diff%(1000*60*60*24))/(1000*60*60));

    cuenta.innerHTML = `${d} días · ${h} hrs`;
},1000);