/**
 * MUST include the library or this will fail
 */
var Cloud = require('ti.cloud');

/**
 * this is a test to create a user using the ACS ti.cloud module. When you created your
 * application and "Cloud Enabled" it by clicking the button in the tiapp.xml 
 * properties page, the library was added to you app.
 * 
 * made sure you have created you application in the ACS console or your test app
 * will not work properly
 */
function doACSTest(e) {

	Cloud.Users.create({
		email : 'test@mycompany.com',
		first_name : 'test_firstname',
		last_name : 'test_lastname',
		password : 'test_password',
		password_confirmation : 'test_password'
	}, function(e) {
		if (e.success) {
			// success
			Ti.API.info(JSON.stringify(e, null, 2));
		} else {
			Ti.API.error(JSON.stringify(e, null, 2));
		}
	});

}

/**
 *
 * @param {Object} e
 */
function doHTTPTest(e) {

	// this is available from your appcelerator cloud services console or from your
	// tiapp.xml
	var appId =  Ti.App.Properties.getString("acs-api-key-development"); //"[your-app-id]";

	var url = "https://api.cloud.appcelerator.com/v1/users/login.json?key=" + appId;
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

	// Send the request with parameters, be sure to create this user
	// account in your Appcelerator CLoud Services console before testing
	// the project
	client.send({
		login : "wileyonetest@clearlyinnovative.com",
		password : "wileyonetest"
	});
}

$.index.open();
