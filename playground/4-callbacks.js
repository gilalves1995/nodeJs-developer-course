/*
setTimeout(() => {
    console.log('Two seconds are up.');
}, 2000);

const names = ['Andrew', 'Jess', 'Jen'];
const shortNames = names.filter(name => name.length <= 4);

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = { latitude: 0, longitude: 0 };
        callback(data);
    }, 2000);
};

geocode('Philadelphia', (data) => {
    console.log(data);
});
*/

const add = (a, b, callback) => {
    setTimeout(() => {
        const data = {a: a, b: b};
        callback(data.a + data.b);
    }, 2000);
};

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
});

const doWorkCallback = (callback) => {
    setTimeout(() => {
        callback('This is my error', undefined);
    }, 2000);
};

doWorkCallback((error, result) => {
    if (error) return console.log(error);
    console.log(result);
});