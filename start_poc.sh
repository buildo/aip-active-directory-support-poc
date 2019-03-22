CURRDIR=`pwd`
./build_docker_images.sh
./stop_AD_server.sh
cd ../aip-authentication-server
fkill dex
bin/dex serve examples/config-ldap.yaml &
cd $CURRDIR
./app_start.sh 5555 &
./start_AD_server.sh
