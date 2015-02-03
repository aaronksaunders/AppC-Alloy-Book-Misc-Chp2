function doClick(e) {
	
	
	// this is available from your appcelerator cloud services console
	var appId =  "[your-app-id]";
	
	
	var url = "https://api.cloud.appcelerator.com/v1/users/login.json?key=" +appId;
	var client = Ti.Network.createHTTPClient({
		//  called when the response data is available
		onload : function(_response) {
			var results = JSON.parse(client.responseText);
			// display results on console
			Ti.API.info(JSON.stringify(results, null, 2));
		},
		//  called when an error occurs, including a timeout
		onerror : function(_error) {
			// display error results on the console
			Ti.API.error(JSON.stringify(_error, null, 2));
		},
	});
	// Prepare the connection
	client.open("POST", url);
	
	
	// Send the request with parameters, be sure to create this admin
	// account in your Appcelerator CLoud Services console before testing
	// the project
	client.send({
		login : "wileyonetest@clearlyinnovative.com",
		password : "wileyonetest"
	});
}

$.index.open();
