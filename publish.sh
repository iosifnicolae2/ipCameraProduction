#!/bin/bash
ng build 
rm -r ../ipcamera_production/dist
rm  ../ipcamera_production/server.js
rm  ../ipcamera_production/config_users.json
rm  ../ipcamera_production/package.json
cp -R dist ../ipcamera_production/
cp -R server.js ../ipcamera_production/
cp -R config_users.json ../ipcamera_production/
cp -R package.json ../ipcamera_production/
cd ../ipcamera_production
git add .
git commit -m "automatic_update"
git push origin master
