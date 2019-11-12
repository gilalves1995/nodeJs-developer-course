/*
const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {

        reject('Things went wrong!');
        resolve([7,4,1]);
    }, 2000);
});

doWorkPromise.then((result) => {
    console.log('Success: ', result);
}).catch((error) => {
    console.log('Error:', error);
});
*/


/* Promise Chaining Example */
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    });
};

/*
add(1,2).then(sum => {
    console.log(sum);

    // Bad solution - nested calls make the code complex
    add(sum, 5).then(sum2 => {
        console.log(sum2);
    }).catch(error => {
        console.log(error);
    });
}).catch(error => {
    console.log(error);
});
*/

add(1, 1).then(sum => {
    console.log(sum);
    return add(sum, 4);

}).then(sum2 => {
    console.log(sum2);
}).catch(error => {
    console.log(error);
});