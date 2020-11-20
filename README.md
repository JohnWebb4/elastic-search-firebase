# Elastic Search Firebase

## Goal: Add Elastic Search to a Firebase project

Adding Elastic Search to a Firebase app

## Install

Install [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/)

Install [Node](https://nodejs.org/)

Clone via SSH

```sh
git clone git@github.com:JohnWebb4/elastic-search-firebase.git && cd elastic-search-firebase
```

Install client libraries

```sh
cd client && npm i
```

Update the max map count to support the server. Add this to /etc/sysctl.conf

```
vm.max_map_count=262144
```

Run server

```sh
./bin/server.sh
```

Verify server running

```sh
curl http://127.0.0.1:9200/_cat/health
```

Run client

```sh
./bin/client.sh
```
