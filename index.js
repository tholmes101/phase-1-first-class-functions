function receivesAFunction (callback) {
    callback();
}

function returnsANamedFunction () {
    return function fn () {
    return fn;
    };
} 
returnsANamedFunction();

function returnsAnAnonymousFunction () {
    return function () {
    };
}
returnsAnAnonymousFunction();