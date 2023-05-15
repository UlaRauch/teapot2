keycloak-server_2:		10001
mongo_db_2			27017
gateway_0			8080
gateway_rs			8180
gateway_client			8181
teas_0				8084
teas_rs				8184
------------------------------------
unvollständig:

# gateway and teas as resource server:
## teas:
	- not teas2!
	- port 8084
	- unprotected: "/teas/hello/noauth", "/teas/create"
	- protected:
		/teas
			- /hello/{name}
			- /getall
			- /delete/{teaId}
			- /maketea/{teaId}
	- realm: teapot

## gateway2:
	- port: 8180
	- realm: teapot
	- unprotected: "/hellogateway", "/hellotea/noauth"
	- protected:
		- /
		- /helloauth (without routing)
		- routing for:
			- teas:
				- /hellotea/{name}	routes to ${TEAS}/teas/hello/{name}
				- /listteas			routes to ${TEAS}/teas/getall
				- /maketea/{teaID}	routes to ${TEAS}/teas/maketea/{teaID}
				- /milk				routes to ${MILK}/getmilk
	
	- realm: teapot