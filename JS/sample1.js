// // const input = prompt()
// // alert(input)

// // if(confirm('are you sure'))
// // {
// //     console.log('yes')
// // }else{
// //     console.log('no')
// // }

// console.log(window.outerWidth)
// console.log(window.outerHeight)
// console.log(window.innerWidth)
// console.log(window.innerHeight)
// console.log(window.location)
// console.log(window.location.hostname)
// console.log(window.location.port)
// console.log(window.location.href)


// // if(confirm('are you sure'))
// // {
// //     window.location.href="https://www.youtube.com/"
// //     console.log(window.location.href)
// // }else{
// //     window.location.href="https://www.google.com/"
// //     console.log(window.location.href)
// // }

// var c=window.navigator.vendor
// console.log(c)

var x = "declared outside function";

exampleFunction();

function exampleFunction() {
    var x = "declared inside function";  
    console.log("Inside function");
    console.log(x);
}

console.log("Outside function");
console.log(x);