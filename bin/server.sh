#!/bin/bash

echo 'Starting server...'

pushd server

sudo docker-compose up

popd

echo 'Done starting server'