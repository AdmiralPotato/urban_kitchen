
/*
 * GET users listing.
 */

var Moniker = require('moniker');
var names = Moniker.generator([Moniker.adjective, Moniker.noun]);
exports.list = function(req, res){
	res.send("Your username is " + names.choose());
};