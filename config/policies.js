/**
* Policy defines middleware that is run before each controller/controller.
* Any policy dropped into the /middleware directory is made globally available through sails.middleware
* Below, use the string name of the middleware
*/
module.exports.policies = {	
	'*': true,
	'messages': 'MessagesPolicy'
};