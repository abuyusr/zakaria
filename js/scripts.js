alert('Hello world');
// added new pokomen variables
let pokemonList =[ {name:"Bulbasaur", type:"grass", height:"3"},
{name:"Ivysaur", type:"poison", height:"7"},
{name:"Blastoise", type:"water", height:"5"}    
]
 // Used document.write() inside the loop’s code
for (let i=0; i < pokemonList.length;i++) {
    if (pokemonList[i].height <5 && pokemonList[i].height >3) {
        document.write (pokemonList[i].name +" This is medium");
    }  else if (pokemonList[i].height < 3 ) { document.write(pokemonList[i].name + "This is small");}
    else { document.write(pokemonList[1].name + " Wow, that is big! ")}

}

