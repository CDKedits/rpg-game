let characters = [
  {
    name: 'jotaro',
    health: 200,
    attack: 75,
    counterattack: 85,
  },
  {
    name: 'joseph',
    health: 175,
    attack: 50,
    counterattack: 60,
  },
  {
    name: 'kakyoin',
    health: 150,
    attack: 65,
    counterattack: 75,
  },
  {
    name: 'polnareff',
    health: 150,
    attack: 65,
    counterattack: 55,
  },
  {
    name: 'avdol',
    health: 175,
    attack: 65,
    counterattack: 80,
  },
  {
    name: 'dio',
    health: 300,
    attack: 75,
    counterattack: 75,
  }
]

let userChoice = null

document.addEventListener(`click`, function () {
  switch (event.target.id) {
    case `jotaro`: 
    document.querySelector(`#jotaro`).style.display = `none`
    document.querySelector(`#user-choice`).innerHTML = `
    <div id="jotaro" class="character-stats character">
        <p>Jotaro Kujo</p>
        <img id="jotaro" src="./assets/images/jotaro.jpg" alt="jotaro">
        <p>200 HP</p>
      </div>
    `
      break
    case `joseph`:
      break
  }
})


// const charChoice = () => {
//   if (event.target.className === `character`)
//   switch (className) {
//     case jotaro:
//     document.querySelector(`#user-char`).innerHTML = `
//     <h1 id="user-char">Your Character</h1>
//     <div class="character-stats character">
//         <p>Jotaro Kujo</p>
//         <img class ="character" src="./assets/images/jotaro.jpg" alt="jotaro">
//         <p>200 HP</p>
//       </div>
//     `
//     break

//   }
// }