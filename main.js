function counter() {if (typeof counter === 'undefined') {var counter = 1; console.log(counter);}else if (typeof counter === 'number') {counter = ++counter; console.log(counter);} return counter};
