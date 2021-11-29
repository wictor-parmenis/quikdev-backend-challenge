# API USERS - Quik Dev
A functional api aimed at registering a user in a database, currently the mongo DB. In addition to the availability of registration, other services such as: delete, update, list users, see user and consult session token are also available.


## Setup Environment
- Node: v14
- Yarn: v1.22.10
- NPM: v6.14.13
- Docker: v19.03.12
- Docker-compose: v3.7

## Steps

### 1) Clone the repository, install node packages and verify routes locally

```
//on local
npm install
```

See all kinds of requests for API with file: **quikdev_example_requests_insomnia** , present in root of project.

### 2) Define enviroment variables

```
// my setup present in .env (root of project)
DB_HOSTNAME=database
DB_HOSTNAME_DEV=localhost
DB_PORT=27017
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=clientsQuikDev
APP_PORT=3535
DOCKER_PORT=3333
SECRET=731bf70b9b8dd98ea4c426bcd23da4f8
```

### 3) Run in Docker.

```
// commands
docker build -t goodNameForImage .
docker-compose build
docker-compose up
```

#### Or run in your localhost

```
// commands
yarn start
```

For run in your localhost, please put the variable DB_HOSTNAME_DEV in line 9 of file /src/config/databaseConfig.ts , for switch connection of your database host.

## Notes

My commit history has a small time difference because in fact I had to redo the project thinking about delivering the commit history more faithfully to the stages of my development. However, the application development time is not reflected in the commit times.
PS: The development time of this application was about 6-7 hours on Sunday plus 2 hours on Monday.
***
Unfortunately I didn't have time to do the unit tests, however I'm available to learn :)

Thanks for the opportunity.

