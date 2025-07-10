
// 🏆 Code Question 1

const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name);
console.log(secondBurger.name);

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

/*
Risposta:

inizialmente ho l'oggetto hamburger, che successivamente viene salvato dentro la variabile 
secondBurger, ma solo come riferimento, senza creare copie, quindi l'oggetto continua ad essere uno solo.
Successivamente vengono modificati i valori name e weight ma andando a modificare l'oggetto originale
quindi l'oggetto creato è solo 1.
e visto che sto estraendo solamente il valore name, è l'unica cosa che verrà stampata.

*/