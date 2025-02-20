# Teapot
Teapot Gateway + Teas Service mit OAuth2 und Keycloak

Originally from Bachelor Thesis Project

## TODO:
- rm docker
- limit amout of tea:
  - new property for tea model: amountInStock Integer
  - rename "make tea" to "pour tea"
  - each request to pour tea will
    - check the amount
    - if no tea available: give back hot water
    - else:
      - pour tea
      - reduce the amount in stock
      - if only one portion left:
        - add amount info to pour tea response (nice to have)

  - add refill Stock method
    - params: tea id, amount
    - 
- bring back discovery Service
- separate read from write tea

## run in intellij without docker (except keycloak and mongodb)
- set environment variables in run configuration
- replace host.docker.internal or container names with localhost
- TODO: find where iss-uri is still overriden to be host.docker.internal,
so the iss-uri will match the actual uri (localhost) - unti then, spring security can be tested only to the point wether or not a request will be accepted or referred to login with keycloak, but tocken check will fail - or find fix for "cookie not found"


## start mit docker-compose
intellij mit docker plugin
docker-images für mongodb (mongo) und keycloak (quay.io/keycloak/keycloak:20.0) pullen

-> compose.yml im root folder

startet keycloak-server, gateway, discovery-service, teaservice, mongoDB

manchmal dauert es kurz, bis alle services miteinander registriert sind
besonders gateway und teaservice brauchen manchmal mehrere starts

## keycloak-server konfigurieren:
muss man leider einmal machen, wenn der container neu kreiert wird, automatischer import funktioniert mit dem neuen keycloak image anders, nicht gefixed

http://localhost:10001/admin
keycloak admin zugangsdaten:
admin
admin
(bzw. siehe compose.yaml (in root)

realm importieren: create realm -> keycloak/realm-export.json

client teapot-gateway auswählen und passwort reset machen, neues passwort in compose.yml client-secret ENV-variable kopieren

user anlegen + unter credentials passwort einrichten

mit user credentials über gateway anmelden, indem einer der geschützten gateway-endpoints aufgerufen wird

## frontend
derzeit kein container
! nicht in dieser kombination getestet, frontend braucht evt. anpassungen


- frontend-test ist registrierter client

- teapot-frontend ist kein client

in beiden fällen muss man sich im browser im gateway anmelden, damit zugriff auf backend möglich ist

dependencies: react-router-dom, keycloak-js

## endpoints

### frontends:
- frontend-test (mit weiterleitung zu login): localhost:3000
- teapot-frontend: localhost 3001

### datenbank füllen (mit postman ohne auth, direkt am resource server (teaservice)):
- POST localhost:8084/create
  Body raw json mit name und description, id ist optional
  {
  "name": "Lady Grey",
  "description": "black tea with lemon and orange flavour"
  }
  bei erfolg kommt der tee als json (ggf. mit generierter id) zurück

### weitere offene endpoints zum testen via frontend (schicken Text zurück)
korrekten port aus compose.yml file auslesen, unterscheidet sich zwischen den branches, weil verschiedene versionen für load testing parallel gelaufen sind
- gateway:
    - http://localhost:8181/hellogateway
- resource server über gateway:
    - http://localhost:8181/hellotea/noauth (nur bei der ungeschützten variante)

### geschützte endpoints
- gateway:
    - localhost:8181/hellogateway
- resource server über gateway:
    - localhost:8181/listtypes (gibt json mit tees aus DB zurück)
    - localhost:8181/maketea/{id} (Schickt "Here is your cup of {tea}! Enjoy!ke", bzw. "hot water" statt dem gewählten tee, wenn nicht verfügbar)
    - localhost:8181/delete/{id} (schickt bestätigung oder fehlermeldung zurück)

## versionen & docker images
- keycloak image: quay.io/keycloak/keycloak:20.0
- mongoDB image: mongo
    - version: 6.0.2
- gateway + teaservice: spring boot 3.0.2
- frontend: node 14.17.0
- react-router-dom 6.8.1
- keycloak-js 20.0.3