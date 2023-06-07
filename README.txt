Read Me - Sito della Palestra
Benvenuti nel Read Me del sito della palestra! Questo documento fornirà una panoramica delle funzionalità e delle tecnologie utilizzate per la realizzazione del sito.

Tecnologie Utilizzate
Il sito della palestra è stato sviluppato utilizzando diverse tecnologie:

Backend: SpringBoot
Frontend: HTML, CSS, React, React Router Dom e JavaScript

Funzionalità del Sito
Il sito della palestra offre diverse funzionalità per gli utenti, con accesso differenziato in base al ruolo.

Login
Il sito permette agli utenti di effettuare il login utilizzando le proprie credenziali. Una volta autenticati, gli utenti hanno accesso alle funzionalità specifiche del loro ruolo.

Ruolo "Gestore"
Se si accede con l'username "gestore", si ottiene l'accesso alle funzionalità avanzate riservate al ruolo di gestore della palestra. Queste funzionalità includono:

Creazione di nuovi insegnanti: Il gestore può creare nuovi profili per gli insegnanti della palestra. Questo consente di tenere traccia degli insegnanti disponibili per i vari corsi.
Creazione di nuovi corsi: Il gestore può creare nuovi corsi offerti dalla palestra.
Visualizzazione degli utenti iscritti ai corsi: Il gestore può visualizzare gli utenti raggruppati per iscrizione ai vari corsi. Questo fornisce una panoramica completa delle iscrizioni.

Ruolo "Utente"
Se si accede con un utente registrato, si ottiene l'accesso alle funzionalità riservate agli utenti. Queste funzionalità includono:

Visualizzazione dei corsi: Gli utenti possono visualizzare i corsi disponibili sulla piattaforma.
Iscrizione ai corsi: Gli utenti possono iscriversi ai corsi desiderati. Tuttavia, se l'abbonamento è scaduto, non sarà possibile iscriversi a nuovi corsi fino a quando non verrà rinnovato direttamente in palestra.

Come eseguire il Sito
Per eseguire il sito della palestra sul proprio ambiente locale, è necessario seguire i seguenti passaggi:

Assicurarsi di avere installato Java e Maven per il backend per il frontend.
Clonare il repository del progetto dalla repository Git.
Aprire il terminale nella directory del progetto.
Eseguire i comandi mvn install per installare le dipendenze del backend e npm install per installare le dipendenze del frontend.
Avviare il backend utilizzando il comando mvn spring-boot:run. Assicurarsi che il server venga avviato correttamente sulla porta specificata.
Aprire un nuovo terminale nella directory del progetto e avviare il frontend utilizzando il comando npm start. Il sito sarà disponibile all'indirizzo http://localhost:3000.

Conclusioni

Il sito della palestra è stato sviluppato utilizzando un'architettura a stack, con il backend basato su SpringBoot e il frontend realizzato con HTML, CSS, React, React Router Dom e JavaScript. Le funzionalità di login, gestione degli utenti e dei corsi offrono agli utenti un'esperienza completa e intuitiva per accedere alle informazioni e interagire con la palestra.

