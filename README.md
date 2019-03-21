
# Introduction

This is a POC that demonstrate a possible configuration for supporting Active Directory integration for AIP.




# Launch everything

First build `openldap-sals-proxy-authorization` docker image with:

>   ./build_docker_images.sh

Then launch everything with:

>   ./start_poc.sh

# Future work

## Make

### Free Notes (ignore them)

ldapsearch -x -h 127.0.0.1 -p 1389 -D uid=admin,ou=system -w secret -b ou=users,dc=wimpi,dc=net
ldapsearch -x -h ldap://adpoc_ad_1 -p 1389 -D uid=admin,ou=system -w secret -b ou=users,dc=wimpi,dc=net


ldapsearch -x -h 127.0.0.1 -p 389 -b ou=users,dc=wimpi,dc=net  -D uid=test,ou=system -w secret


ldapsearch -x -H ldap://adpoc_ldap_1 -b dc=example,dc=com -D samaccountname=test -w c2VjcmV0


ldapsearch -x -h 127.0.0.1 -p 389 -b dc=wimpi,dc=net -D uid=test,ou=users,dc=wimpi,dc=net -w c2VjcmV0

ldapsearch -x -h 127.0.0.1 -p 389 -b ou=users,dc=wimpi,dc=net -D uid=admin,ou=system  -w secret


```
$ ldapsearch -h ldaphostname -p 389 -x -b "dc=splunkers,dc=com"

All of the above options are necessary to perform a simple, anonymous bind to the LDAP server.

-h hostname
-p port number
-x tells ldapsearch to perform a simple_authentication (yes, you need this even for anonymous bind)
-b baseDN
```


 ldapsearch -v -x -h 127.0.0.1 -p 389 -D "cn=Manager,dc=wimpi,dc=net" -w SuperSecret -b "ou=users,dc=wimpi,dc=net"

ldapsearch -v -x -h 127.0.0.1 -p 389 -D "uid=test,ou=users,dc=wimpi,dc=net" -w secret -b "ou=users,dc=wimpi,dc=net"
