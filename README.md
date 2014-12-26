KarmaAPI
========
Simple node.js app to provide API to communicate with MongoDB, created for [KarmaKruncher](https://github.com/sirkitree/karmakruncher).

### Installation
	~$ git clone git@github.com:makangus/karma-api.git
	~$ cd karma-api
	~$ npm install

Open the config.js file and fill out the MongoDB credentials.
	
	~$ node bin/www

### Usage
	GET http://localhost:8000/api/karma
	GET http://localhost:8000/api/karma/[:id]
	PUT http://localhost:8000/api/karma/[:id]
	POST http://localhost:8000/api/karma/[:id]
	DELETE http://localhost:8000/api/karma/[:id]
