document.addEventListener('keyup' , e =>{
    console.log(e.target.value);
    if (e.target.matches('.input_src')) {
     const cajas_P = document.querySelectorAll(".card_pj")
        cajas_P.forEach(carta => {
            if(carta.className.includes(e.target.value)){
                carta.classList.remove("filtro");
            }
            else{
                carta.classList.add("filtro");
            }

        })
    }
})

const results = "https://rickandmortyapi.com/api/character/";
for(i = 1; i < 827; i++){
    fetch(results + i)
        .then(response => response.json())
        .then(data => getCharacters(data));    
}

getCharacters = (data) => {
    const main = document.querySelector(".container_cards");
    let especie = data.type
    if(especie == ""){
        especie = "N/A";
    }

        const container_cards = document.createElement("div");
        container_cards.classList.add("card_pj");
        container_cards.classList.add(`${data.name}`.toLowerCase());
        container_cards.classList.add(`${data.name}`);
        container_cards.innerHTML = `
        <div class="card">
            <div class="face front">
                <img src="${data.image}">
                <h3 class="nombre">${data.name}</h3>
            </div>
            <div class="face back">
                <h3 class="title_personaje" id="${data.id}">${data.name}</h3>
                <p><i class="fa-brands fa-creative-commons-sampling"></i>${data.status}</p>
                <p class="especie"><i class="fa-solid fa-person"></i>${data.species}</p>
                <p><i class="fa-solid fa-spaghetti-monster-flying"></i>${especie}</p>
                <p><i class="fa-solid fa-venus-mars"></i>${data.gender}</p>
            </div>
        </div>
            `;
    
    main.append(container_cards);

};

// MODAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL 
window.addEventListener('load', ()=>{
    const cajaModal = document.querySelector(".all_container_modal");
    const titlePersonaje = document.querySelectorAll(".title_personaje");
    const close = document.querySelector(".icon_close");
    const modal = document.querySelector(".container_modal");

    titlePersonaje.forEach((elemento) =>{

        elemento.addEventListener('click',(event)=>{

            let idPersonaje = event.target.id;
            console.log(idPersonaje);
            modal.style.top = "0px";

            fetch(results + idPersonaje).then((response) => response.json()).then((dataP) => infoModal(dataP))
            cajaModal.classList.add("modal_ver");

            close.addEventListener('click', ()=>{
                modal.style.top = "-1000px";
                cajaModal.classList.remove("modal_ver");
            })
        })
    })
});

const infoModal = (data_P)=>{
    console.log(data_P)
    let title_personaje_modal = document.querySelector(".modal_title");
    let status = document.querySelector("#status");
    let species = document.querySelector("#species");
    let type = document.querySelector("#type");
    let gender = document.querySelector("#gender");
    let origin = document.querySelector("#origin");
    let location = document.querySelector("#location");
    let imgPersonaje = document.querySelector(".img_info");

    let especie = data_P.type
    if(especie == ""){
        especie = "N/A";
    }

    let status_info = data_P.status;
    let mayuscula = status_info[0].toUpperCase();
    let residuo = status_info = status_info.slice(1);
    status_info = mayuscula + residuo;

    title_personaje_modal.textContent = data_P.name;
    status.textContent = `Status: ${status_info}`;
    species.textContent = `Species: ${data_P.species}`;
    type.textContent = `Type: ${especie}`;
    gender.textContent = `Gender: ${data_P.gender}`;
    origin.textContent = `Origin: ${data_P.origin.name}`;
    location.textContent = `Location: ${data_P.location.name}`;
    imgPersonaje.setAttribute('src', `${data_P.image}`)
}
