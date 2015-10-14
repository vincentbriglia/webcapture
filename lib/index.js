var Nightmare = require('nightmare');

var webCapture = function (args) {

	var nightmare = new Nightmare({
		show: !!args.debug,
		width: 400,
		height: 400
	})

	nightmare
		.goto('http://localhost:3000')
		.wait(50)
		.screenshot('./speak.jpg')
		.run(function () {
			console.log('done');
		});

	nightmare.end();

}

module.exports = exports = webCapture;