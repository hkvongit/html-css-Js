var a=5
console.log("a is "+a)
function vaaa(){
    console.log("a inside function is "+a)
    a=10
    console.log("a inside function after change is "+a)
    b=6 //for declaration of global variable inside the function never use 'var" keyword
}
console.log("a outside the func is "+a)
output=vaaa()
console.log("b outside func is "+b)