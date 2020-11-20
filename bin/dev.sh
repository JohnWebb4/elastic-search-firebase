#!/bin/bash

echo 'Running firebase server locally...'

pushd functions

npm run serve

popd

echo 'Done running firebase locally'