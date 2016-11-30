var page = require('page');
var empty = require('empty-element');
var template = require('./template');

page('/signin',function(ctx, next){
	var mainSection = document.getElementById('main-section');
	var secondarySection = document.getElementById('secondary-section');

	empty(mainSection).appendChild(template);
	empty(secondarySection);
})