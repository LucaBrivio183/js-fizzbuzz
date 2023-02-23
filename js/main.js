//strict rules

'use strict'

//defining  ul variable

const uList = document.querySelector("ul.unstyled-list");

//creating  cycle for (1 to 100)

for ( let i = 1; i <= 100; i++ ){

     const liElement = document.createElement('li');

    if(  i % 15 === 0 ) {
        console.log('fizzbuzz');
        liElement.append('fizzbuzz');

    }  else if( i % 5 === 0) {
        console.log('buzz');
        liElement.append('buzz');

    } else if( i % 3 === 0 ) {
        console.log('fizz');
        liElement.append('fizz');

    } else {
        console.log(i);
        liElement.append(i);
    }

    uList.append(liElement);
}
