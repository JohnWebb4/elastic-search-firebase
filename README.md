# Elastic Search Firebase

## Goal: Add Elastic Search to a Firebase project

Adding Elastic Search to a Firebase app

## Install

Install [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/)

Install [Node](https://nodejs.org/)

Install [Curl CLI](https://github.com/curl/curl) if you don't have it

Clone via SSH

```sh
git clone git@github.com:JohnWebb4/elastic-search-firebase.git && cd elastic-search-firebase
```

Install function libraries

```sh
cd function && npm i
```

Update the max map count to support the server. Add this to /etc/sysctl.conf

```
vm.max_map_count=262144
```

## Run Server

```sh
./bin/server.sh
```

Verify server running

```sh
curl http://127.0.0.1:9200/_cat/health
```

Simple script to add and return search results

```sh
cd client & npm i
./bin/client.sh
```

## Run Firebase client

Run the server locally

```sh
./bin/dev.sh
curl http://localhost:5001/elastic-search-firebase/us-central1/setIndex -X POST
curl http://localhost:5001/elastic-search-firebase/us-central1/getIndex
```
