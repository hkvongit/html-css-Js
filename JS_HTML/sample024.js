// // var x=5
// // for(i=0;i<x;i++){
// //     console.log("it is "+i)
// // }

// // var ar1=[1,2,3,6,4]
// // ar1.pop(2)
// // console.log(ar1)


// function aa(){
//     g=6
//     console.log("inside aa"+g)
// }
// console.log("outside aa"+g)
var n=4
function a(){
    var n=2
    function inner(){
        n++
        var n=3
        console.log("..."+n)  //3
        
    }
    console.log("chakka")
    inner()
}
function a()