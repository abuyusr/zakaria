
alert('Hello world');
// added new pokomen variables
/* let pokemonList =[ {name:'Bulbasaur', type:'grass', height:3 },
                   {name:'Ivysaur', type:'poison', height:7 },
                   {name:'Blastoise', type:'water', height:5 }    
                   ] */
 // Used document.write() inside the loop’s code


/* for (let i=0; i< pokemonList.length;i++) {
  if (pokemonList[i].height >= 7) {
      document.write (pokemonList[i].name + " (height:" + pokemonList[i].height + "m) - Wow, that is big!" + "<br>")
  } else if (pokemonList[i].height >= 4 && pokemonList[i].height < 6) {
      document.write (pokemonList[i].name + " (height:" + pokemonList[i].height + " m ) - This is medium" + "<br>")
  } else {
      document.write(pokemonList[i].name + " (height:" + pokemonList[i].height + " m ) - This is small Pokemon "+" <br>")
  }
} */

let pokemonRepository =(function(){
    let pokemonList =[ {name:'Bulbasaur', type:'grass', height:3 },
                     {name:'Ivysaur', type:'poison', height:7 },
                     {name:'Blastoise', type:'water', height:5 }, 
                     {name:'pikachu', type:'electric', height:1 },   
                     ];
    
    function add(pokemon) {
      pokemonList (pokemon);
     }
  
    function getAll() {
      return pokemonList;
    }
    // created addListItem and click listner
    function addListItem (pokemon) {
      let pokemonList = document.querySelector(".pokemon-list");
      let listpokemon = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("button-class");
      button.addEventListener("click", (Event) => showDetails(pokemon));
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);
    }
    
  
     return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
     
    
     };
   })();
  
   // used forEach loop to retrieve the pokemonList array.
      pokemonRepository.getAll().forEach(function (pokemon) { 
      pokemonRepository.addListItem (pokemon);
        
  });
