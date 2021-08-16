const container = document.getElementById("container");

const character_count = 52;





const getCharacter = async () => {
  const url = "https://thronesapi.com/api/v2/Characters";
  const res =  await fetch(url);
  const data = await res.json();

  
  

  for(let i = 0; i <= character_count; i++) {
    createCharacterCard(data[i])
    // console.log(data[i]);

  }


}


const createCharacterCard = (character) => {
  const characterEl = document.createElement("div");
  characterEl.classList.add("character");

  console.log(character);

    const name = character.fullName;
    const id  = character.id.toString().padStart(2,"0");
    const title = character.title;
    const family = character.family;
    const imageUrl = character.imageUrl;

    const characterInnerHTML = `
      <div class="img-container">
        <img src="${imageUrl}" alt="">
      </div>
      <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <p>${title}</p>
        <small class="type">Family: <span>${family}</span></small>
      </div>
    
    `
    characterEl.innerHTML = characterInnerHTML;
    container.appendChild(characterEl);



}


getCharacter();