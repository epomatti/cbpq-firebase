# CBPQ Firebase

Server-side for the CBPQ services.

## Running the code

1. `npm i -g firebase-tools`
2. Run `npm install`on functions directory
3. `firebase serve --only functions,hosting`


## New Firebase project

More or less the commands to create a Firebase project from the scratch with cloud functions. Keeping it here for quick reference.

1. `npm i -g firebase-tools`
2. `firebase init hosting`
3. `firebase init functions`
4. `cd functions`
5. `npm i express --save`
6. `firebase serve --only functions,hosting --project <your project name>`
7. `firebase deploy`
