# Project-11
React Flickr Gallery

This project calls the Flickr API which uses free but private API keys, so I have not created a public-facing live site.  If you want to try it out on your local computer, do the following:


You will need node and npm.

Click the clone or download button above, then click download ZIP.

Expand the files into a directory of your choice.

Navigate to said directory, then to the sub-directory where the package.json file is, in terminal/bash.

Type `npm install` and hit enter.

It may take a few minutes for the dependencies to download to your system.

The server that renders the app can now be started with `npm start` but it will fail to compile since it won't find the Config module which contains the API key.

You can get a key [here](https://www.flickr.com/services/apps/create/). 

You can put it in a separate file called Config.js like I have and import it to Container.js, or just use it directly in Container.js.  It goes in the query string of the GET request made therein.

The Config.js file looks like this:

`const apiKey = 'your key here';
export default apiKey;`

Once your key is in place you will be good to go! Restart the server if necessary.


