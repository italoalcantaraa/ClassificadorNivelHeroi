import prompt from 'prompt-sync';
let input = prompt();

let json = {
    name: "italo",
    age: 18,
    product: {
        0:["Mouse",200.99],
        1:["Monitor",600.00],
    }
}

console.log(json);