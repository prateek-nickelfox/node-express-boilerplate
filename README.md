
## Steps to configure

### DB configuration

Postgres installation using docker 

`docker run --name some-postgres -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres`

`docker exec -ti some-postgres psql -U postgres`

Once logged into the psql shell

`create database blueverse;`

## Setting up the local environment

1. Update the .env file in the root directory of the project to match the credentials of your database
2. Open the terminal and navigate to the root directory
3. Install "node_modules" ===> `npm install`
4. Run the application server on dev mode: `npm run dev`


Prerequisites: 
    - ts-node 
    - nodemon

