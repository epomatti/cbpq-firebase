# CBPQ Firebase

Server-side for the CBPQ services.

## Running the code

1. `npm install -g firebase-tools`
2. `firebase serve --only functions,hosting`


## Firebase cloud functions project

More or less the commands that follow. Keeping it here for quick reference.

1. `npm install -g firebase-tools`
2. `firebase init hosting`
3. `firebase init functions`
4. `cd functions`
5. `npm i express --save`
6. `firebase serve --only functions,hosting --project <your project name>`
7. `firebase deploy`
