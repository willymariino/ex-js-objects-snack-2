
// 💪 Code Question 1
{
    const hamburger = { name: "Cheese Burger", weight: 250 };
    const secondBurger = hamburger;
    secondBurger.name = 'Double Cheese Burger';
    secondBurger.weight = 500;

    console.log(hamburger.name);
    console.log(secondBurger.name);
}

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

/*
Risposta:

inizialmente ho l'oggetto hamburger, che successivamente viene salvato dentro la variabile 
secondBurger, ma solo come riferimento, senza creare copie, quindi l'oggetto continua ad essere uno solo.
Successivamente vengono modificati i valori name e weight ma andando a modificare l'oggetto originale
quindi l'oggetto creato è solo 1.
e visto che sto estraendo solamente il valore name, è l'unica cosa che verrà stampata.
Meglio: verrà stampato due volte il nome aggiornato dell'oggetto: "Double Cheese Burger"
*/

// 🏆 Code Question 2

{
    const hamburger = {
        name: "Cheese Burger",
        weight: 250,
        ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
    };

    const secondBurger = { ...hamburger };
    secondBurger.ingredients[0] = "Salad";

    console.log(hamburger.ingredients[0]); // ?
    console.log(secondBurger.ingredients[0]); // ?

}

// P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!
// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

/*
Risposta: 
Qui iniziamo con l'oggetto hamburger, di cui viene creata una shallow copy tramite spread operator quando viene salvato 
nella variabile secondBurger, ma essendo una shallow copy, copia solo il primo livello escludendo gli elementi 
annidati, come l'array ingredients, che invece viene salvato come riferimento all'oggetto originale.

Quindi qui viene creato l'oggetto burger, l'oggetto secondBurger, mentre quello che viene stampato in console è il primo
elemento dell'array ingredients "cheese" che viene sostituito in entrambi i casi con "salad"

*/

// 😎 Code Question 3

{
    const hamburger = {
        name: "Cheese Burger",
        weight: 250,
        maker: {
            name: "Anonymous Chef",
            restaurant: {
                name: "Hyur's Burgers",
                address: "Main Street, 123",
                isOpen: true,
            },
            age: 29
        }
    };

    const secondBurger = structuredClone(hamburger);
    const thirdBurger = structuredClone(hamburger);
}
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

/*
Risposta: 

Qui è stato usato structured clone che è in grado di creare deep copy degli oggetti, a tutti i livelli,
mantenendo anche tutti i tipi di dati, come date, funzioni, simboli, in questo caso è stato creato in memoria il 
primo oggetto burger, che contiene altri 2 oggetti, quindi in totale 3 oggetti salvati nella prima variabile.
poi la seconda variabile secondBurger e la terza variabile thirdBurger, contengono anche loro 3 oggetti, avendo fatto 
copie profonde esatte con structured clone, quindi in totale: 9 oggetti.
*/