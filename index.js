// Code your solution in this file!

function receivesAFunction (callback){
    callback();
}
function returnsANamedFunction (){
    return function namedFunction(){
        console.log ("named function");
    }
}
function returnsAnonymousFunction(){
    return function anonymousFunction(){
        console.log ("anonymousfunction")
    }
}
