# User-Details-App
Simple RESTful API using node and express.

## How to run this project
1. git clone to <dir>

2. go to <dir>

3. We user `docker-compose` command so we need to install that

4. from <dir>   
    `$docker-compose up `

5. backend should listen on port 3000, frontend on 800 and pg database on 5432

## Run test 
    docker-compose run --rm node_backend  npm run test

## Main Project Structure:

    ├── backend/
    │   ├── model/
    |   |    |-- dbConfig.json
    |   |   |-- ModelOperations.js
    │   ├── services
    |   |  |-- user.js 
    |   |  |-- tone.js
    |   |  |-- test
    |   |-- config
    |   |-- Dockerfile
    |   |-- server.js
    │   └── api
    |       |-- routes
    │       ├── test
    │ 
    │      
    ├── frontend
    |   |__ public
    |   |── app.js
    |   |__ view
    |    |__ routes
    |    |__ bin
    |    |__ package.json
    |    |__ Dockerfile
    |__ docker-compose.yml


### Example: 

