function counter() {if (typeof counter === 'undefined') {var counter = 1; console.log(counter);}else if (typeof counter === 'number') {counter = ++counter; console.log(counter);} return counter};
var counter = 0
counter()
if (typeof counter === 'undefined') {console.error('Function Error')}else{console.log('function success')}
