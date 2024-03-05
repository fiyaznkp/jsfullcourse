// swicth case

// let a = 1

// switch(a){
//     case 1:
//     console.log('one')
//     break;
//     case 2:
//     console.log ("two");
//     break;
//     case 3:
//     console.log('three')
//     break;
//     default:
//     console.log('invalid');
//     break;
// }
// console.log(a)

// let input = document.getElementsByName('text')[0]
// let myh1 = document.getElementById('myh1')

// function message(){
//     myh1.innerText = "hello " + input.value
// }
// let myh1 = document.createElement('h1')

// function add(){
//     myh1.innerText="Hello"
//     document.body.appendChild(myh1)
// }
// function remove(){
//    myh1.remove()
// }
// let heading = document.getElementById('heading')
// let btn = document.getElementById('btn')

// btn.addEventListener('click',changeColour)
// heading.addEventListener('mouseover',changeBg)

// function changeColour(){
//     heading.style.color = 'red'
// }
// function changeBg(){
//     heading.style.backgroundColor = 'green'
// }

// oops in js

class employee {
    constructor (name,age,position,salary){
        this.name =name;
        this.age=age;
        this.position =position;
        this.salary=salary
    }
    getSalary(){
        console.log((`salary of ${this.name} is ${this.salary}`))
    }
}
let employee1 = new employee('john',30,"Manager",40000)
let employee2 = new employee('jacob',32,'HR',32000)
employee1.getSalary()
employee2.getSalary()
console.log(employee1.name)

// inheritance in oops

class Manager extends employee {

}
let Manager1 = new Manager('smith',34,'Manager',45000)
console.log(Manager1)
Manager1.getSalary()
console.log(Manager1.name)