var xhr = new XMLHttpRequest();

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
];
var plantilla = "<div class='col s3 card tarjeta hoverable'>"+ '<a href="#modalPokemon" class="link" data-url="**url**" >' +
					'<img src="**imagen**" class="center-align">' + '</a>'+
					'<h6 class="center-align">' +
					'**nombrePokemon**'+ '</h6>' +
					'</div>'

$.getJSON("http://pokeapi.co/api/v2/pokemon/", function(response){
	var pokemons = response.results;
	crearPokemons(pokemons, imagenes);
});


function crearPokemons(pokemons, imagenes) {
	var $contPokemones = $("#pokemones");
	var plantillaFinal = "";
	var noPokemon;
	pokemons.forEach(function (pokemon, indice) {
		plantillaFinal += plantilla.replace("**nombrePokemon**", pokemon.name).replace("**imagen**", imagenes[indice].imagen)
		.replace("**url**", "http://pokeapi.co/api/v2/pokemon-species/"+(indice+1)+"/");
  	});
	$contPokemones.html(plantillaFinal); 
	var $link = $('.link').click(detallePokemon); 	
	modalPokemon();
}

var plantillaDetalle = '<h4>**nombre**</h4>' + 
							'<div class="row">' + 
								'<div class="col s6">'+
									'<img src="**src**">'+
								'</div>'+
								'<div class="col s6">'+
									'<p><strong>Habitat :</strong>"**habitat**</p>'+
									'<p><strong>Color :</strong>"**color**"</p>'+
									'<p><strong>Shape :</strong>"**shape**"</p>'+
									'<p><strong>Genera :</strong>"**genera**"</p>'+
								'</div>'+
							'</div>'+
						'</div>';

function detallePokemon(){
	var $modalDetalle = $('.modal-content');
	var $imagen = ($(this).find("img").attr('src'));
	$.getJSON(this.dataset.url, function(response){
	var habitat = response.habitat.name;
	var color = response.color.name;
	var shape = response.shape.name;
	var genera = response.genera[0].genus;

	crearDetalle(habitat, color, shape, genera);
	});
};

function crearDetalle(habitat, color, shape, genera){
	console.log(habitat, color, shape, genera);
}
function modalPokemon(){
	$('.modal').modal();
}