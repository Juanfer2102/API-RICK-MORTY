document.addEventListener('keyup' , e =>{
    console.log(e.target.value);
    if (e.target.matches('.input_src')) {
     const cajas_P = document.querySelectorAll(".card_lc")
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

const results = "https://rickandmortyapi.com/api/location/"

for(i = 1;i < 127; i++){
    fetch(results + i)
           .then(response => response.json())
           .then(data => getLocations(data));

}

getLocations = (data) => {
    const main = document.querySelector(".pj");
        const pj = document.createElement("div");
        pj.innerHTML = `
            
            <div class="content_info">
                
                <img class="imagen2" src="../assets/img/pngegg.png">

                <div class="content2">
                    <h2>${data.name}</h2>
                    
                     <p>${data.dimension}</p>
                     
                     <p>${data.type}</p>
                     
                </div>
            </div>

            
        `;
        
                      
    main.append(pj);  
                        
                

};