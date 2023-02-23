//strict rules

'use strict'

//defining  ul variable

const uList = document.querySelector("ul.unstyled-list");

//creating  cycle for (1 to 100)

for ( let i = 1; i <= 100; i++ ){

     const liElement = document.createElement('li');

    if(  i % 15 === 0 ) {
        let classIndex = 'fizzbuzz';
        console.log('fizzbuzz');
        liElement.append('fizzbuzz');
        liElement.classList.add(`${classIndex}`);

    }  else if( i % 5 === 0) {
        let classIndex = 'buzz';
        console.log('buzz');
        liElement.append('buzz');
        liElement.classList.add(`${classIndex}`);

    } else if( i % 3 === 0 ) {
        let classIndex = 'fizz';
        console.log('fizz');
        liElement.append('fizz');
        liElement.classList.add(`${classIndex}`);

    } else {
        let classIndex = 'number';
        console.log(i);
        liElement.append(i);
        liElement.classList.add(`${classIndex}`);
    }

    uList.append(liElement);
}

