# Project-11
React Flickr Gallery

This project calls the Flickr API which uses free but private API keys, so I have not created a public-facing live site. If you want to try it out on your local computer, do the following:


click the clone or download button above, then click download ZIP

expand the files into a directory of your choice

navigate to said directory, then to the sub-directory where the package.json file is, in terminal/bash

type `npm install` and hit enter

it may take a few minutes for the dependencies to download to your system

the server that renders the app can now be started with `npm start` but it will fail to compile since it won't find the Config module which contains the API key

you can get a key [here](https://www.flickr.com/services/apps/create/) 

you can put it in a separate file called Config.js like I have and import it to Container.js, or just use it directly in Container.js. it goes in the query string of the GET request made therein.

once your key is in place you will be good to go! restart the server if necessary.


