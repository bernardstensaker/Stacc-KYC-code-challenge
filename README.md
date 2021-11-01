# Stacc code challenge 2021

## Oppgavebeskrivelse
Jeg har valgt å løse oppgaven ved å lage en webapp som søker etter politisk eksponerte personer gjennom API'et dere lagde. Webappen søker igjennom API'et og returnerer eventuelle treff på personer samt hvilken database de er funnet i.

## Hvordan kjøre prosjektet
Dette prosjektet er laget med [Create React App](https://github.com/facebook/create-react-app), så for å starte prosjektet må man åpne prosjektet i en IDE, i mitt tilfelle har jeg brukt Visual Studio Code, og i terminalen skrive:

`npm install`
* For å laste ned alle de nødvendige pakkene for å kunne kjøre prosjektet.

`npm start` 
* For å starte den lokale development serveren

dette starter en lokal development server på [http://localhost:3000](http://localhost:3000) som oppdaterer seg fortløpende når koden endrer seg.

## Kommentarer
Ettersom dette er første gang jeg jobber med React for å gjøre spørringer fra et API er det en del ting jeg gjerne skulle gjort annerledes, men ikke har hatt tid til å gjøre samtidig som jeg lærer meg teknologien. Kommentarer til forbedring/videre jobbing:

* Prøve å lage appen med functional component istedenfor class component for å minimere unødvendig stor fil.

* Lage en måte for kun å hente ut et bestemt antall resultater, så ikke man kan skrive 'john' og få 714 treff.

  * Dette er midlertidig løst ved å rendre en melding om for mange 'hits', men dataen blir fremdeles hentet fra API'et.

  * Dette kunne også blitt løst ved å lage en 'vis mer' funksjon eller fordelt resultatene over flere sider, men det vil fremdeles være problatisk når det i verste     tilfellet kan returnere i overkant av 80 000 resultater.
  
  * En siste løsning på dette kunne vært å lage min egen API, der man selv kan sette en begrensning for antall svar ved get forespørsler.  
  
* Legge til en loading side som viser brukeren at det faktisk er noe som skjer, dersom spørringer tar litt tid.


