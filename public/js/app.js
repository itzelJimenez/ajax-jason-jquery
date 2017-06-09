var xhr = new XMLHttpRequest();

/*xhr.onreadystatechange = function (e) {
	if (this.readyState === 4) {
		if (this.status === 200) {
			var response=JSON.parse(this.response);
			var pokemons = response.results;
			console.log(this.response);
			crearPokemons(pokemons)
		}
		
	}
};

xhr.open("GET", "http://pokeapi.co/api/v2/pokemon/");

xhr.send();

function crearPokemons(pokemons) {
	var ul = document.getElementById("pokemons");

	pokemons.forEach(function (pokemon) {
		var li = document.createElement("li");
		li.textContent = pokemon.name;

		ul.appendChild(li);
	});
}

*/
var imagenes = [
{
	"imagen":"img/bulbasaur.png"
},
{
	"imagen":"img/ivysaur.png"
},
{
	"imagen":"img/venusaur.png"
},
{
	"imagen":"img/charmander.png"
},{
	"imagen":"img/charmeleon.png"
},
{
	"imagen":"img/charizard.png"
},{
	"imagen":"img/squirtle.png"
},
{
	"imagen":"img/wartortle.png"
},{
	"imagen":"img/blastoise.png"
},
{
	"imagen":"img/caterpie.png"
},{
	"imagen":"img/metapod.png"
},
{
	"imagen":"img/butterfree.png"
},{
	"imagen":"img/weedle.png"
},
{
	"imagen":"img/kakuna.png"
},{
	"imagen":"img/beedrill.png"
},
{
	"imagen":"img/pidgey.png"
},{
	"imagen":"img/pidgeotto.png"
},
{
	"imagen":"img/pidgeot.png"
},{
	"imagen":"img/rattata.png"
},
{
	"imagen":"img/raticate.png"
},
]
console.log(imagenes);
var plantilla = "<div class='col s3 card tarjeta hoverable'>"+ 
					'<img src="**imagen**" class="center-align">' + 
					'<h6 class="center-align">' +
					'**nombrePokemon**'+ '</h6>' +
					'</div>'

$.getJSON("http://pokeapi.co/api/v2/pokemon/", function(response){
	console.log(response);
	var pokemons = response.results;
	crearPokemons(pokemons, imagenes);
})

function crearPokemons(pokemons, imagenes) {
	var $contPokemones = $("#pokemones");
var plantillaFinal = "";
	pokemons.forEach(function (pokemon, indice) {
		plantillaFinal += plantilla.replace("**nombrePokemon**", pokemon.name)
				.replace("**imagen**", imagenes[indice].imagen);
  });
	$contPokemones.html(plantillaFinal);  
	

	
}




