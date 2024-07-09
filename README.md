# TRACCIA
Descrizione: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

# FLOW
1- Creo una funzione per generare 5 numeri casuali in un array, facendo in modo di evitare doppioni (funzione con parametro)
1.1 - Recupero l'ul dal DOM
1.2 - Eseguo un ciclo while che completa l'iterazione quando l'array ha 5 elementi
    - Creo 5 numeri random da 1 a 100
    - ? il numero non è presente nell'array
        - => inserisco il numero nell'array
        - Creo un elemento li
        - Gli inserisco il numero
        - Aggiungo l'li nell'ul
2- Creo un'altra funzione per gestire l'isnerimento di 5 numeri dell'utente, restituendoli in un array (funzione con ritorno)
2.1 - Dichiaro l'array vuoto per i numeri dell'utente
2.2 - Creo un ciclo for per l'indice che va da 0 a 4
    - Chiedo all'utente l'inserimento di un numero che ricorda
    - Qualora il valore inserito non fosse un numero
        - Richiedo all'utente di inserire un valore numerico
    - Inserisco il numero dell'utente nell'array
    - Restituisco l'array così formato
3- Dichiaro 3 variabili per: (1) l'array dei numeri generati; (2) l'array dei numeri inseriti dall'utente tramite prompt; (3) l'array vuoto in cui il programma inserirà i numeri indovinati
4- Creo il countdown
4.1 - Dichiaro una variabile per i secondi e la inizializzo a 30
4.2 - Recupero l'elemento #timeout dal DOM e gli inserisco come testo "ti restano " + variabile secondi + " secondi"
4.3 - Aggiungo un setInterval e lo salvo in una variabile "timer"
    - ? i secondi arrivano a 0
        - Fermo il timer
        - assegno la funzione 2 (inserimento numeri utente) all'array dei numeri dell'utente
        - Eseguo un ciclo for che iteri i numeri inseriti dall'utente
            - ? il numero inserito dall'utente è presente nell'array dei numeri generati randomicamente
                - => riempi l'array 3 (per i numeri indovinati)
        - Manda un alert con scritto "Hai indovinato i numeri: " + array numeri indovinati
    - : ALTRIMENTI
        - Decrementa di uno i secondi
4.4 Setto l'intervallo a 1 secondo