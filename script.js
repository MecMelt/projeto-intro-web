const serie0 = {
    id: 0,
    name: "Olhos que Condenam",
    year: "2019 - 2019",
    genre: "Historia Real",
    nationality: "EUA",
    imagem: "./img/when.jpg",
    description: "Cinco adolescentes do Harlem vivem um pesadelo depois de serem injustamente acusados de cometer de um ataque brutal no Central Park. Autores: Ava DuVernay, Robin Swicord, Julian Breece, Michael Starrbury, Attica Locke.",
    video:"https://www.youtube.com/embed/YyoSErErnCE"
};
const serie1 = {
    id: 1,
    name: "Irmandade",
    year: "2019 - 2022",
    genre: "Drama",
    nationality: "BR",
    imagem: "./img/irmandade.jpg",
    description: "A advogada Cristina recebe a arriscada tarefa de se infiltrar na gangue de seu irmão e ser uma informante da polícia. Aos poucos, a moça entra em uma teia de violência e traições que testa todos os seus limites.",
    video:"https://www.youtube.com/embed/xt11-wM_UdY"
};
const serie2 = {
    id: 2,
    name: "Atlanta",
    year: "2016 - Atualmente",
    genre: "Comédia/Drama",
    nationality: "EUA",
    imagem: "./img/atlanta.jpg",
    description: "Earnest Earn Marks sai da faculdade para virar o agente da carreira de súbito sucesso de seu primo. Porém, os dois discordam em diversos pontos sobre a divisão entre arte e entretenimento no hip-hop.",
    video:"https://www.youtube.com/embed/CetGXHU5aOA"
};
const serie3 = {
    id: 3,
    name: "Um Maluco no Pedaço",
    year: "1990 - 1996",
    genre: "Comédia",
    nationality: "EUA",
    imagem: "./img/maluco.jpg",
    description: "Will Smith mostra um retrato aproximado de sua vida real. Nessa comédia, sua mãe o envia da Filadélfia para viver com o tios ricos Phil e Vivian em Bel-Air, Califórnia, onde vive se divertindo com as trapalhadas dos primos Carlton e Hilary.",
    video:"https://www.youtube.com/embed/1nCqRmx3Dnw"
};
let series = [];
for (i = 0; i < 4; i++) {
    series.push(eval("serie" + i));
}
function search(array, search){
    const result = array.filter(function (item) {
        let searchLower=search.toLowerCase()
    return item.name.toLowerCase().includes(searchLower) 
    });
    console.log(result.length)
    if(result.length==0){
        alert("Nenhuma série encontrada")
        return series
    }else{
        return result
    }
}
function apagar(){
    document.getElementById("item-content").removeChild(node)
}
function show(array){
        document.getElementById("item-content").innerHTML=""
        
        array.map((item, index) => {
            
            let serieItem = document.querySelector(".item").cloneNode(true);
        
            serieItem.querySelector(".image img").src = item.imagem;
            serieItem.querySelector(".item .content").innerHTML = 
            `<ul>
                <li>${item.name}</li>
                <li>Ano: ${item.year}</li>
                <li>Gênero: ${item.genre}</li>
                <li>Nacionalidade: ${item.nationality}</li>
            </ul>`
            serieItem.setAttribute("data-key", item.id);
            serieItem.addEventListener("click", (e)=>{
                let key = e.target.closest(".item").getAttribute("data-key");
                document.querySelector(".serieWindowArea").style.display="flex"
                document.querySelector(".video iframe").src=series[key].video
                document.querySelector(".content-text .tittle").innerHTML=series[key].name
                document.querySelector(".content-text .content-description").innerHTML=series[key].description
                document.querySelector(".serieWindowArea").style.opacity = 0;
                document.querySelector(".serieWindowArea").style.display = "flex";
                setTimeout(() => {
                    document.querySelector(".serieWindowArea").style.opacity = 1;
                }, 200);
                });
                document.getElementById("item-content").appendChild(serieItem);
                });
            }

function closeModal() {
    document.querySelector(".video iframe").src=""
    document.querySelector(".serieWindowArea").style.opacity = 0;
    setTimeout(() => {
        document.querySelector(".serieWindowArea").style.display = "none";
    }, 400);
}
show(series)
document.getElementById("search-button").style.cursor = "pointer";
document.getElementById("search-button").addEventListener("click", function(){
    let input=document.getElementById("search").value.trim()
    console.log(input)
    show(search(series, input))
    document.querySelector("search").placeholder
})
