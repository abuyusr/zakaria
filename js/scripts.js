
let pokemonRepository =(function(){
    let pokemonList =[  ];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let pokemonListEl = $(".pokemon-list");

  /* list array is replaced with link to API */  
    function add(pokemon) {
        pokemonList.push(pokemon);
    }

/* data to be fetched from API */
    function getAll() {
      return pokemonList;
    }

    function addListItem(pokemon) {
        //let pokemonListEl = $('.pokemon-list');
        let listItem = $('<li class= " list-group-item"></li>');
        let button = $('<button class = "pokemon-button btn btn-warning" data-target="#pokemon-modal" data-toggle="modal">' + pokemon.name + "</button>");
        listItem.append(button);
        pokemonListEl.append(listItem);
        button.on("click", function () {
            showDetails(pokemon);
        });
    }


    /* loading data from the API using promise */  
  
    async function loadList() {
        try {
            const response = await fetch(apiUrl);
            const json = await response.json();
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url,
                };
                add(pokemon);
            });
        } catch (e) {
            console.error(e);
        }
    }


/* 
  /* loading details from API, define which details by "item." */
  async function loadDetails(item) {
    let url = item.detailsUrl;
    try {
          const response = await fetch(url);
          const details = await response.json();
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types.map((type) => type.type.name);
          item.abilities = details.abilities.map((abilities) => abilities.ability.name);
      } catch (e) {
          console.error(e);
      }
}

function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
        showModal(pokemon);
    });
}



function showModal(pokemon) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    modalBody.empty();
    modalTitle.text(pokemon.name);
    let height = $("<p>" + "Height: " + pokemon.height + "</p>");
    let image = $('<img class = "pokemon-img" src = " ' + pokemon.imageUrl + '" />');
    let types = $("<p>" + "Types: " + pokemon.types + "</p>");
    let abilities = $("<p>" + "abilities: " + pokemon.abilities + "</p>");
    modalBody.append(image);
    modalBody.append(height);
    modalBody.append(types);
    modalBody.append(abilities);
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