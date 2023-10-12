const searchBtn = document.querySelector(".searchBtn")
const nameInput = document.getElementById("hero-input")
const errorDiv = document.querySelector(".error-div")

const heroInfo2 = async () =>{

    try{
        const response = await fetch (`https://www.superheroapi.com/api.php/3695200347474778/search/${nameInput.value}`)
        const data = await response.json()
        domContentAdded(data.results[0])

    }catch(error){
        console.error(error + "there is an error in fetching data ");
        errorDiv.style.display = "block";
    }
}


searchBtn.addEventListener("click", heroInfo2)


function domContentAdded(data){
    console.log(data);

    let x = 
        `
        <div class="img-div">
                // <img src=${data.image.url}>
                <ul class="appearance">
                    <h3>Appearance</h3>
                    <li>Eye Color: \xa0${data.appearance["eye-color"]}</li>
                    <li>Gender: \xa0${data.appearance.gender}</li>
                    <li>Hair Color: \xa0${data.appearance["hair-color"]}</li>
                    <li>Height: \xa0${data.appearance.height[0]} / ${data.appearance.height[1]}</li>
                    <li>Race: \xa0${data.appearance.race}</li>
                    <li>Weight: \xa0${data.appearance.weight[0]} / ${data.appearance.weight[1]}</li>
                </ul>
            </div>
            <div class="biography">
                <ul>
                    <h3>Biography</h3>
                    <li>Alignment: \xa0${data.biography.alignment}</li>
                    <li>Alter Egos: \xa0${data.biography["alter-egos"]}</li>
                    <li>Fill Name: \xa0${data.biography["full-name"]}</li>
                    <li>Place of Birth: \xa0${data.biography["place-of-birth"]}</li>
                    <li>Publisher: \xa0${data.biography.publisher}</li>
                </ul>
            </div>
            <div class="PowerStats">
                <ul>
                    <h3>PowerStats</h3>
                    <li>Combat \xa0${data.powerstats.combat}</li>
                    <li>Intelligence: \xa0${data.powerstats.intelligence}</li>
                    <li>Power: \xa0${data.powerstats.power}</li>
                    <li>Speed: \xa0${data.powerstats.speed}</li>
                    <li>Strength: \xa0${data.powerstats.strength}</li>
                </ul>
            </div>
            <div class="connection">
                <ul>
                    <h3>Connection</h3>
                    <li>Group Affiliation: \xa0${data.connections["group-affiliation"]}</li>
                    <li>Relatives: \xa0${data.connections.relatives}</li>
                </ul>
            </div>

        `

    document.querySelector(".root-div").innerHTML = x;
}