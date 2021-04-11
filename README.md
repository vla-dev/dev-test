# dev-test

## docker-compose 
### Services:
    - mongodb
    - nginx
    - node.js
        - 1 GET endpoint to check the mongo connection
        - 1 POST endpoint that generates dummy data
        - 1 endpoint to get data aggregation time

### Requirements
    - Nginx serves a static content (Angular app)
    - Angular app must have
        - Login that store the user into redux store
        - The login is possible only if the 'Existing Connection' endpoint returns 200
        - A menu with two pages:
            - First page has only a button that call the dummy data generation endpoint
            - The second page only shows the aggregation time from the last endpoint

## Setup 
 - ```git clone https://github.com/vla-dev/dev-test.git```
 - ```cd dev-test/frontend  --> npm install```
 - ```cd dev-test/backend  --> npm install```
 - ```cd ..``` (to the 'dev-test' directory)
 - before building the images a new docker volume needs to be created with the following name 'devTestMongoVolume'. run ``` docker volume create devTestMongoVolume ```
 - run  <strong>```  docker-compose up --build ```</strong> with ```-d``` if you want to run the containers dettached
 - docker ps -a to check if all the containers are up

 The app will be available at: http://localhost or http://127.0.0.1

<strong>Note:</strong> Firstly, the app checks if in the localStorage is a token (currently hardcoded in json format). If you already have a token into the localStorage, please remove it and refresh the page.
