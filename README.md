# WFP2
Teapot Gateway + Teas Service mit OAuth2 und Keycloak

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