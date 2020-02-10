// Cloud Code entry point
const request = require('request');
const domain = 'http://localhost:1337/parse';
const masterKey = '7C2024K2TVlPBLDFRMowQ2xNEkrXw1dPTWYMM2Ds';
const appId = '54ymWbY4tl0UeZnnLQ3OVvHykKxlRTydiBvpdJ1M';
const restAPIKey = 'GGmbVq9sjSw9uODaf1fHsqMn2AL8tooE0OkLJGRz';

Parse.Cloud.beforeDelete('Photo', (req, res) => {
	console.log(req.object.get('photo').name());
	const options = {
		url: domain + '/files/' + req.object.get('photo').name(),
		method: 'DELETE',
		headers: {
			'X-Parse-Application-Id': appId,
			'X-Parse-Master-Key': masterKey
		}
	};
	request(options, (error, response, body) => {
		console.log(body);
	});
})