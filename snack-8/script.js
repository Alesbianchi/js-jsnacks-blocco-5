const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

//Utilizzo ciclo find affinchè una volta trovata la classe assegnata interrompa il ciclo

const oneStudent = students.find((studente) => {
  return studente.id === 1;

});


//stampo il risultato
console.log(oneStudent.class);