# dev-test

## docker-compose 
### Services:
    - mongodb
    - nginx
    - node.js
        - 1 GET endpoint to check the mongo connection
        - 1 POST endpoint that generates dummy data
        - 1 endpoint to get data aggregation time

## Requirements
    - Nginx serves a static content (Angular app)
    - Angular app must have
        - Login that store the user into redux store
        - The login is possible only if the 'Existing Connection' endpoint returns 200
        - A menu with two pages:
            - First page has only a button that call the dummy data generation endpoint
            - The second page only shows the aggregation time from the last endpoint
