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
    let pokemonList =[  ];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
    
    function add(pokemon) {
      if ( typeof pokemon === "object" &&
      "name" in pokemon) 
      { pokemonList.push (pokemon);} 
      else {
        console.log (" pokemon is not correct");
      }
              
     }
  
    function getAll() {
      return pokemonList;
    }
   // Added click listeners.
    function addListItem (pokemon) {
      let pokemonList = document.querySelector(".pokemon-list");
      let listpokemon = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("button-class");
      button.addEventListener('click', function (pokemon) {
      console.log(pokemon);
      });
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);
      button.addEventListener ("click", function (event){
        showDetails (pokemon);
      });
    }
    function showDetails(pokemon) {
      console.log (pokemon);
    }
    // Add loadList function.
    function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }
    // Add loadDetails function.
    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      }).catch(function (e) {
        console.error(e);
      });
    }
    // Add showDetails function
    function showDetails( item) { 
       pokemonRepository.loadDetails (item).then ( function () {
        console.log (item);
      });

    }
   // Added loadList, showDetails and loadDetails returns.
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList:loadList,
      loadDetails: loadDetails,
      showDetails:showDetails,
    
     };
   })();
  
   // used forEach loop to retrieve the pokemonList array.
   // Added loadList and callback function.
   pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function (pokemon) { 
      pokemonRepository.addListItem (pokemon);
        
  })
   })