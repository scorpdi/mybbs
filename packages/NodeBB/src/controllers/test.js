'use strict';

const testController = module.exports;

testController.home = function (req, res, next) {
	res.render('test');
};
