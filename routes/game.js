var playerList = [];


var Player = function(args){
	var t = this, type = 'Player', config = args || {};
	if(t.type !== type){
		throw new Error(type + ' constructor must be invoked using `new` keyword.');
	}
	t.id = config.id || 'bob';
	t.name = config.name || 'bob';
	t.spawnPoint = config.spawnPoint || 0;
	t.pos = config.pos || {x: 0, y : 0};
	t.vel = config.pos || {x: 0, y : 0};
	t.head = config.head || 0;
	t.torso = config.torso || 0;
	t.legs = config.legs || 0;
	t.team = config.team || 0;
	t.holding = false;
	teamList[t.team].playerList.push(t);
	playerList.push(t);
};

Player.prototype = {
	type: 'Player'
};

var getPlayerById = function(playerId){
	var player = false,
		i, len = playerList.length;
	for(i = 0; i < len; i++){
		if(playerList[i].id === playerId){
			player = playerList[i];
		}
	}
	return player;
};

var removePlayerById = function(playerId){
	var player = false,
		team = false,
		i, len = playerList.length;
	for(i = len - 1; i >= 0; i--){
		if(playerList[i].id === playerId){
			player = playerList[i];
			if(player.team !== false){
				team = teamList[player.team];
				player.team = false;
				team.playerList.splice(team.playerList.indexOf(player), 1);
			}
			playerList.splice(i, 1);
		}
	}
	return player;
};


var ingredientList = [
	{name:'garlic'},
	{name:'onion'},
	{name:'mushroom'},
	{name:'carrot'},
	{name:'greenpepper'},
	{name:'jalapeno'},
	{name:'tomato'},
	{name:'potato'},
	{name:'noodles'},
	{name:'rice'},
	{name:'chicken'},
	{name:'avocado'}
];

var recipeList = [
	{
		name: 'Salsa',
		ingredientList: [0, 1, 5, 6]
	},
	{
		name: 'Guacamole',
		ingredientList: [0, 1, 5, 6, 11]
	},
	{
		name: 'Chicken Noodle Soup',
		ingredientList: [0, 1, 2, 3, 8, 10]
	},
	{
		name: 'Chicken Rice Casserole',
		ingredientList: [0, 1, 4, 5, 9, 10]
	},
	{
		name: 'Spicy Potato Chicken',
		ingredientList: [0, 1, 5, 7, 10]
	}
];


var teamList = [
	{
		name: 'Red',
		color: '#c30',
		spawnPoint: {x: 200, y: 0},
		playerList: []
	},
	{
		name: 'Green',
		color: '#c30',
		spawnPoint: {x: 0, y: 200},
		playerList: []
	},
	{
		name: 'Blue',
		color: '#06c',
		spawnPoint: {x: -200, y: 0},
		playerList: []
	},
	{
		name: 'Yellow',
		color: '#fc0',
		spawnPoint: {x: 0, y: -200},
		playerList: []
	}
];

var ingredientsOnFieldList = [];

var placeRandomIngredientOnFieldByRecipeId = function(recipeId){
	var recipe = recipeList[recipeId],
		ingredientId = recipe.ingredientList[Math.round(Math.random() * (recipe.ingredientList.length - 1))],
		newIngredientForField = {
			ingredient: ingredientList[ingredientId],
			x: (Math.random() - 0.5) * 400,
			y: (Math.random() - 0.5) * 400
		};
	ingredientsOnFieldList.push(newIngredientForField);
	return newIngredientForField;
};


