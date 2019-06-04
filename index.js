"use strict";
// 0. One earns for free the typing simply by using file.ts 
//let myAge = 30
//myAge = 'Luiz'   //Wrong because TS statically typed myAge as sting
//                 // even thougn we did not do it explicitly.
//  ** Basic Types ** 
// 1. string 
//let myName: string = `Luiz Carneiro`;
//let sentence: string = `My name is ${ myName }. 
// 2. boolean
//let isAlive: boolean = true;
// 3. number
//let decimal: number = 6;
//let hex: number = 0xf00d;
//let binary: number = 0b1010;
//let octal: number = 0o744;
// 4. Array
//let myAdress = ['Rio', 'de', 'Janeiro']
//myAdress = ['München'] //That is ok because the array was statically 
//typed as any
//myAdress = [20]   // Wrong.
//   Two syntaxes: 
//let myHobbies:Array<string> = ['JS', 'Games', 'Skate']
//let myMusic: string[] = ['Cole', 'Paak', 'West']
// 5. Tuple - What about arrays of mixed types? 
//let myPokemons: [string, number] = ['Pikachu', 10] 
// myPokemons = ['Vulpix']      //Wrong, where is the number you said ? 
// myPokemons = [10, 'Vulpix'] //Wrong, ordening. 
// myPokemons = ['Vulpix', 10] //Ok
// Truples conserve variables type 
// console.log(myPokemons[0].substr(1)); // OK
// console.log(myPokemons[1].substr(1)); // Error, 'number' does not have 'substr'
// 6. Enums - Make numbers more expressive 
//            Fun compilation to JS
// enum Colors {Red, Black, Blue} //Enum type declaration is a bit diff
// console.log(Colors[0]) // Red 
// let myColors: Colors = Colors.Blue
// console.log(myColors) // 2
// enum IDs {Token = 134141 , secretToken = 56256, Bearer = 343423433}
// let mySecretToken: IDs = IDs.secretToken
// console.log(mySecretToken) 
// 7. Any - Differs from type Object, since the last doesnt allow 
//          to call arbitrary prototype methods.
//          Particularly useful when migrating a JS codebase to TS. 
// let myFuture: any = 'not sure'
// myFuture = {age: 34, music: ['Kanye', {white: 'delRey'}]}
// let notSure: any = 4;
// notSure.ifItExists(); // okay, ifItExists might exist at runtime
// notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
// let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
//let list: any[] = [1, true, "free"];
//list[1] = 100;
// 8. Void -  the opposite of any: the absence of having any type at all
//let myName: string = 'Luiz'
//function sayMyName(): void{
//    document.write(myName)
//}
//sayMyName()
//Declaring variables of type void is not useful 
//because you can only assign undefined or null to them
//let unusable: void = undefined;
// 9. Objects 
// let luizData: {name: string, age: number} = {
//     name: 'Luiz',
//     age: 30
// }
// 10. Type Never 
// function neverReturns(): never {
//     throw new Error('We should not reach this code block')
// }
// neverReturns()
// Different of voids since it representes a piece of code that 
// one should dsiscard . 
//  ** Applying Types ** 
// 1. functions 
// It is important to specify the types of the arguments 
// function multiply(price, tax): number{
//     console.log(price * tax)
//      return price * tax
// }
// multiply(2, 'Luiz')
// function finalPrice(price: number, tax: number): number{
//      console.log(price * tax)
//      return price * tax
// }
// finalPrice(2, 3)
// 2. Functions as types itself
// When you do not give a variable a function type
// you can make things like:
// function finalPrice(price: number, tax: number): number{
//      console.log(price * tax)
//      return price * tax
// }
// finalPrice(2, 3)
// let myName: string = 'Luiz'
// function sayMyName(): void{
//    document.write(myName)
// }
// sayMyName()
// // let myMultiply;
// // myMultiply = sayMyName;
// // myMultiply()
// // myMultiply = finalPrice;
// // myMultiply(2,3)
// // A solution is to give a function type to myMultiply
// let myMultiply: (val1: number, val2: number) => number;
// myMultiply = finalPrice;
// myMultiply(2,3)
// 3. Union types 
// let myRealRealAge: number | string = 27 
// myRealRealAge = "27"
// myRealRealAge = true // Error
// 4. Complex object and type alias 
// let complex: {data: number[],
//               output: (all: boolean) => number[]} = 
//               {data: [100, 3.99, 10],
//                output: function (all: boolean): number[] {
//                    return this.data;
//                }}
// let complex2: {data: number[],
//         output: (all: boolean) => number[]} = 
//         {data: [100, 3.99, 10],
//          output: function (all: boolean): number[] {
//              return this.data;
//          }}
// type complex = {data: number[],
//     output: (all: boolean) => number[]}
// let complex2: complex = 
//         {data: [100, 3.99, 10],
//          output: function (all: boolean): number[] {
//              return this.data;
//          }}
// ** Powerfull Classes 
// class Person {
//     private type: string = 'Male'
//     protected age: number
//     origin: string = 'Rio'
//     constructor(public firstName: string){
//         this.age = this.setAge(30)
//     }
//     protected setAge(age: number): number{
//         return age
//     }
//     greetGender(): void{
//         console.log(`${this.firstName} has ${this.age} y.o and is a ${this.type}`)
//     }
// }
// const luiz: Person = new Person("Luiz")
// console.log(luiz.firstName, luiz.origin)
// // console.log(luiz.firstName, luiz.type, luiz.age)
// luiz.greetGender()
// class Paolo extends Person {
//     constructor(lastName: string){
//         super('Paolinto')
//         this.age = 41
//     }
// }
// const Paolito = new Paolo('Gagari') 
// Paolito.greetGender()
// Paolo.prototype.greetGender = function(){
//     console.log(Paolito.origin)
// }
// Paolito.greetGender()
// // 1. Getters and Setters 
// class videoGames {
//     private favourite: string = 'RE' //Though its a private, we can set a setter 
//     get _favourite(): string{
//         return this.favourite
//     } 
//     set _favourite(game: string){
//         if (game.length > 3){
//             this.favourite = game
//         }
//     }
// }
// let luizGames = new videoGames()
// console.log(luizGames._favourite)
// luizGames._favourite = 'Uncharted'
// console.log(luizGames._favourite)
// // 2. Static properties and methods 
// class consoles extends videoGames {
//     static playstation: number = 3;
//     static sayMyFavourite(): string {
//         return `My favourite videogame is the playstation ${this.playstation}`
//     }
// }
// console.log(consoles.sayMyFavourite())
// // 3. Private Contructors & Singletons 
// class OnlyOne {
//     private static instance: OnlyOne;
//     private constructor (public readonly name: string){}
//     static getInstance(){
//         if(!OnlyOne.instance){
//             OnlyOne.instance = new OnlyOne('The Only One')
//         }
//         return OnlyOne.instance
//     }
// }
// // let wrong = new OnlyOne('The Only One')
// let right = OnlyOne.getInstance()
// console.log(right.name)
// // right.name = 'Right'  //wrong since its a readonly property
// 4. Generics 
// function sumThings<T>(data1: T[], data2: T[]){
//     return [data1, data2]
// }
// console.log(sumThings<number>([1],[2]))
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multipleValue;
    };
    return SimpleMath;
}());
var simple = new SimpleMath();
simple.baseValue = '10';
simple.multipleValue = '10';
console.log(simple.calculate());
