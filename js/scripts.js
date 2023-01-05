alert ("Please refresh the webpage,Thanks")
// added new pokomen variables
let pokemonList =[ {name:'Bulbasaur', type:'grass', height:3 },
                   {name:'Ivysaur', type:'poison', height:7 },
                   {name:'Blastoise', type:'water', height:5 }    
                   ]
 // Used document.write() inside the loop’s code
 // Added heigth and updated the conditions.
/* for (let i=0; i< pokemonList.length;i++) {
  if (pokemonList[i].height >= 7) {
      document.write (pokemonList[i].name + " (height:" + pokemonList[i].height + "m) - Wow, that is big!" + "<br>")
  } else if (pokemonList[i].height >= 4 && pokemonList[i].height < 6) {
      document.write (pokemonList[i].name + " (height:" + pokemonList[i].height + " m ) - This is medium" + "<br>")
  } else {
      document.write(pokemonList[i].name + " (height:" + pokemonList[i].height + " m ) - This is small Pokemon "+" <br>")
  }
} */

// wrapped  pokemonList array in an IIFE 
let pokemonRepository =(function(){
    let pokemonList =[ {name:'Bulbasaur', type:'grass', height:3 },
                     {name:'Ivysaur', type:'poison', height:7 },
                     {name:'Blastoise', type:'water', height:5 },    
                     ];
    
    function add(pokemon) {
      pokemonList (pokemon);
     }
  
    function getAll() {
      return pokemonList;
    }
  
     return {
      add: add,
      getAll: getAll
     };
   })();
  
   // used forEach loop to retrieve the pokemonList array.
      pokemonRepository.getAll().forEach(function (pokemon) {
    console.log(pokemon.name + ' is ' + pokemon.type + ' type wiht height ' + pokemon.height + ' m'    );
  });


