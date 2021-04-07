//Un alert() espone 5 numeri generati casualmente. Da li parte un timer di 30 secondi.
//Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente,
//tramite il prompt().Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri 
//da indovinare sono stati individuati.

//alert con 5 numeri casuali che salvo nel primo array
var arrayNumeriDaRicordare = [];
var quantitaNumeriDaRicordare = 3;

for (i=0; i < quantitaNumeriDaRicordare; i++) {

    thisNumeriDaRicordare = quantitaNumeriDaRicordare[i]
    var numeriDaRicordare = getRundomNumber(1, 5);
    arrayNumeriDaRicordare.push( numeriDaRicordare );
}
console.log(arrayNumeriDaRicordare)
alert( 'Questi sono i numeri che devi memorizzare:  ' + arrayNumeriDaRicordare );


//timer 30 secondi dopo
var milliseconds = 1000;

setTimeout(function() {
    alert("Adesso scrivi i numeri che hai visto prima");

    //5 alert in cui chiedo i numeri che sono usciti prima all'utente e li
    //salvo in un secondo array
    arrayNumeriUtente = [];

    for (j=0; j < quantitaNumeriDaRicordare; j++) {
    
        thisNumeriUtente = quantitaNumeriDaRicordare[j]
        var numeriUtente = parseInt( prompt( 'Inserisci numero che ti ricordi' ) );
        arrayNumeriUtente.push( numeriUtente );
    }
    console.log(arrayNumeriUtente)

    //confronto i due array precedenti e salvo i numeri uguali in un terzo array
    //che mi dirà il numero e i numeri indovinati
    arrayNumeriCoincidenti = [];

    // if ( arrayNumeriDaRicordare.includes ( numeriUtente ) ) {
    
    //     arrayNumeriCoincidenti.push(numeriUtente)
    // }

    if ( arrayNumeriDaRicordare == arrayNumeriUtente ) {
    
        arrayNumeriCoincidenti.push( arrayNumeriUtente )
    }

    console.log(arrayNumeriCoincidenti);

    alert( 'Hai indovinato ' + arrayNumeriCoincidenti + ' numeri, e sono' )

}, milliseconds);




//------------FUNZIONI----------

function getRundomNumber(min, max) {
    rundomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
    return rundomNumber;
  }



