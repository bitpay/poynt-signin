# Node Setup

* Rename the `sample.env` file in the **sellbot** directory to `.env`
* Update the configuration variables to your local setup
	* The `application id` and `keypair` file will be sent separately
* Run `npm install`
	* Script is using `Node 12`
* Install `nodemon` or run `node index.js`


# Website Setup
* Add an entry to your host file to match the test callback
	* `127.0.0.1	local.poynt.com`
* Verify that the port in `sellbot/index.html` at the bottom matches your Node server 