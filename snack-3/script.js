const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]


//utilizzo il ciclo map per creare una copia dell'array a cui andrò ad aggiungere valori agli elementi
const somma = numbers.map((number) =>{
    return number + 1;
});

//stampo il risultato
console.log(somma);



