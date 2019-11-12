// Async/Await

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Numbers must be non-negative.');
            }
            resolve(a + b);

        }, 2000);
    });
};




// The async operator makes the method return a Promise
// The await operator can only be used in async functions
const doWork = async () => {
    // If some is rejected, the remaning code does not run
    const sum = await add(1, 99);
    const sum2 = await add(sum, 50);
    const sum3 = await add(sum2, -3);
    return sum3;
};

doWork().then(result => {
    console.log('Result: ', result);
}).catch(error => {
    console.log('Error: ', error);
});



// Chained promises
/*
add(1, 1).then(sum => {
    console.log(sum);
    return add(sum, 4);

}).then(sum2 => {
    console.log(sum2);
}).catch(error => {
    console.log(error);
});
*/