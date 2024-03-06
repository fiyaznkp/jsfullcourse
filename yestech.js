// // swicth case

// // let a = 1

// // switch(a){
// //     case 1:
// //     console.log('one')
// //     break;
// //     case 2:
// //     console.log ("two");
// //     break;
// //     case 3:
// //     console.log('three')
// //     break;
// //     default:
// //     console.log('invalid');
// //     break;
// // }
// // console.log(a)

// // let input = document.getElementsByName('text')[0]
// // let myh1 = document.getElementById('myh1')

// // function message(){
// //     myh1.innerText = "hello " + input.value
// // }
// // let myh1 = document.createElement('h1')

// // function add(){
// //     myh1.innerText="Hello"
// //     document.body.appendChild(myh1)
// // }
// // function remove(){
// //    myh1.remove()
// // }
// // let heading = document.getElementById('heading')
// // let btn = document.getElementById('btn')

// // btn.addEventListener('click',changeColour)
// // heading.addEventListener('mouseover',changeBg)

// // function changeColour(){
// //     heading.style.color = 'red'
// // }
// // function changeBg(){
// //     heading.style.backgroundColor = 'green'
// // }

// // oops in js

// class employee {
//     constructor (name,age,position,salary){
//         this.name =name;
//         this.age=age;
//         this.position =position;
//         this.salary=salary
//     }
//     getSalary(){
//         console.log((`salary of ${this.name} is ${this.salary}`))
//     }
// }
// let employee1 = new employee('john',30,"Manager",40000)
// let employee2 = new employee('jacob',32,'HR',32000)
// employee1.getSalary()
// employee2.getSalary()
// console.log(employee1.name)

// // inheritance in oops

// class Manager extends employee {

// }
// let Manager1 = new Manager('smith',34,'Manager',45000)
// console.log(Manager1)
// Manager1.getSalary()
// console.log(Manager1.name)

//default parameter in js 

// function sum (a=10,b=20){
// console.log(a+b)
// }
// sum()  here the result is 30 if we give arguments then it will not take default values also if we give one argument and there are two parameters then it will take second value from the default parameter

// arrow function 

// let number = (num)=>{
//     if(num>0){
//         console.log('positive number')
//     }else if(num<0){
//         console.log('negative number')
//     }else{
//         console.log('zero')
//     }
// }
// number(1)
// number(-1)
// number(0)

// class in js

class Bikes {
    // constructor nethod
    constructor(model,colour,price){
        this.model=model;
        this.colour=colour;
        this.price=price
    }
    // prototype method 
    bikeDetails(){
        console.log('Bike: ' + this.model)
        console.log('Colour:' + this.colour)
        console.log('price: ' + this.price)
    }
    showPrice(){
        console.log('price of ' + this.model + ' is ' + this.price)
    }
    static message(){
        console.log('its a static method')
    }
}
let Bike1 = new Bikes('Suzuki Axus','silver',65000)
let Bike2 = new Bikes('hero maestro','black',55000)
let Bike3 = new Bikes('royal enfield bullet classic 350','army green',175000)

// console.log(Bike1.model)
// console.log(Bike2.colour)
// console.log(Bike3)

// Bike1.bikeDetails()
// Bike2.showPrice()

// Bikes.message()
// inheritance 

// class sportsBikes extends Bikes{

// }
// let sportsBike1 = new sportsBikes('ktm duke 390','orange',200000)

// sportsBike1.bikeDetails()

// rest parameter

// function sum(num1,num2,...nums){
//     let result =0
//     for(x of nums){
//         result += x
//     }
//     console.log(result+num1+num2)
// }
// sum(12,23,4,12)

// spread operator 

// it helps to unpack arrays,
// let arr = [1,2,3]

// console.log(...arr)

// here the result will be just 1,2,3 removing array

// copying arrays

// let a =[1,2]

// let b =[...a]
// console.log(b) 

// concating

// let a =[1,2]
// let b =[3,4]
// let c =[...a,...b]
// console.log(c)

// adding a number 

// let a =[1,2]
// let b =[3,4]
// let c =[...a,10,...b]
// console.log(c)

// spread operator in objects

// let obj1={
//     name:'fiyaz'
// }
// let obj2={
//     age:26
// }
// let obj3={
//     place:'koduvally'
// }
// let obj4 = {height:170,...obj1,...obj2,...obj3}
// console.log(obj4)