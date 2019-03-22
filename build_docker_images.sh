cd openldap-sasl-proxy-authorization-docker
docker build -f Dockerfile -t openldap-sasl-proxy-authorization .
cd ../ldap-ad-it
docker build -f Dockerfile -t psdocker/ldap-ad-it .
