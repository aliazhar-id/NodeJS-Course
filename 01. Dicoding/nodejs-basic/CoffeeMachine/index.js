// import { coffeeStock as x, isCoffeeMachineReady as y } from './state.js';
 
// console.log(x);
// console.log(y);

// try {
//     console.log("Awal blok try");
//     console.log("Akhir blok try");
// } catch (error) {
//     console.log("Baris ini diabaikan");
// } finally {
//     console.log("Akan tetap dieksekusi");
// }

// let json = '{ "bad json" }';
 
// try {
//     let user = JSON.parse(json);
 
//     console.log(user.name);
//     console.log(user.age);
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }

// let json = '{ "age": 20 }';
 
// try {
//     let user = JSON.parse(json);
 
//     console.log(user.name); // undefined
//     console.log(user.age);  // 20
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }

// let json = '{ "age": 20 }';
 
// try {
//     let user = JSON.parse(json);
 
//     if (!user.name) {
//         throw new SyntaxError("'name' is required.");
//     }
 
//     console.log(user.name); // undefined
//     console.log(user.age);  // 20
// } catch (error) {
//     console.log(`JSON Error: ${error.message}`);
// }

// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "ValidationError";
//     }
// }
 
// let json = '{ "age": 30 }';
 
// try {
//     let user = JSON.parse(json);
 
//     if (!user.name) {
//         throw new ValidationError("'name' is required.");
//     }
//     if (!user.age) {
//         throw new ValidationError("'age' is required.");
//     }
 
//     console.log(user.name);
//     console.log(user.age);
// } catch (error) {
//     if (error instanceof SyntaxError) {
//         console.log(`JSON Syntax Error: ${error.message}`);
//     } else if (error instanceof ValidationError) {
//         console.log(`Invalid data: ${error.message}`);
//     } else if (error instanceof ReferenceError) {
//         console.log(error.message);
//     } else {
//         console.log(error.stack);
//     }
// }

// console.log("Selamat datang!");
// setTimeout(() => {
//   console.log("Terima kasih sudah mampir, silakan datang kembali!");
// }, 3000);
// console.log("Ada yang bisa dibantu?");

const orderCoffee = callback => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
        callback(coffee);
    }, 3000);
}
 
 
orderCoffee(coffee => {
    console.log(coffee);
});