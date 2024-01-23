// function expression

// const fun = function (one){
//   console.log(one)
// }
// fun(1)

// const fun =function (a,b){
//     console.log(a+b)
// }
// fun(10,3)

// default parametres

// function calc (a,b=0){
//     console.log(a+b)
//     return a+b
// }
// calc(3)


// rest parametres

// function calc (a,...b){
//     console.log(a,b)
// }
// calc(1,2,3)

// nested function

function one(){
    console.log("one")

    function two(){
        console.log("two")

        function three(){
            console.log("three")
        }three()
    }two()
}one()