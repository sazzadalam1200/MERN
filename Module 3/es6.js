//spread operator
// const alph1 = ['a','b','c','d','e']

// const alph3 = [...alph1]
// alph3.push(4)
// console.log(alph1)
// console.log(alph3)


//rest parameter
// function add(...num){
//     let sum = 0
//    for(let i of num){
//     sum=sum+i
//    }
//     console.log(sum)
// }

// add(1,2,3,4,5,6,7,8,9)

//Multidimensionalarray
// let arr1 = ['gg','wp','nt','1hp']
//  let arr2 = ['ak','m4','famas','galil']
// let arr3 = ['5-7','Deagle','usp-s','p250','glock']

// let csgo=[arr1,arr2,arr3]
// console.log(csgo[1][1])

//de-structuring
// let rifle = ['ak','m4','famas','galil']
// let[a,,,d]=rifle
// console.log(null===undefined)

//map
// let myMap = new Map()

// myMap.set('1',"Bangladesh") //key value pair
// myMap.set('2',"Thailand")
// myMap.set('3',"Indonesia")

// console.log(myMap.values())
// console.log(myMap.keys())
// for(let myValue of myMap.values()){
//     console.log(myValue)
// }
// console.log(myMap.get('3'))
// if(myMap.has('4')){
//     console.log("exist")
// }

//set
// let mySet = new Set(arr2)

// mySet.add("a")
// mySet.add("b")
// mySet.add("c")
// mySet.add("a")
// console.log(mySet.values())

//class
// class MyClass{
//     printA(){
//         console.log("A")
//     }
//     printB(){
//         console.log("B")
//     }
// }

// let obj = new MyClass
// obj.printA()

// class myClass{

//     constructor(){
//         console.log("gg")
//     }
// }
// new myClass()

//Static
//directly access class doesn't need object

//inheritance
// class parent{
//     print(name){
//         console.log(name)
//     }
// }
// class child extends parent{
//     print(name){
//         console.log("My name is: "+name)
//     }
// }

// let father = new parent()
// let son = new child()
// father.print("Jamshed")
// son.print("Nick")

//live-test3

// const arr = [1, 2, 3, 4, 5]
// function sumOfEvenSquares(arr) {
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sum += arr[i] * arr[i]
//     }
//   }
//   return sum
// }
// console.log(sumOfEvenSquares(arr))
