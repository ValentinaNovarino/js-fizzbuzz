// Scrivere un programma che stampi tutti i numeri da 1 a 100 con queste regole:
// al posto dei multipli di 3, deve stampare "Fizz"
// al posto dei multipli di 5, deve stampare "Buzz"
// al posto dei multipli sia di 3 che di 5, deve stampare "FizzBuzz"

// ***Creare un programma che stampi tutti i numeri da 1 a 100
for (var i = 3; i < 100; i++) {
    // stampare "Fizz" al posto dei multipli di 3
    if (i % 3 == 0) {
        console.log('Fizz');
    }
    // stampare "Buzz" al posto dei multipli di 5
    if (i % 5 == 0) {
        console.log('Buzz');
    }
    // stampare "FizzBuzz" al posto dei multipli sia di 3 che di 5
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    }
    // stampare il numero se non è nè multiplo di 3 nè di 5
    if (i % 3 != 0 && i % 5 != 0) {
        console.log(i);
    }
}
