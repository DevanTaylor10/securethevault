let code1;
code1 = 7 + 3; // 10

let code2 = (160 - 40) / 3; // 40

let code3 = 79 % 40; // 39

let message = "The vault has been secured. The combination is:";

let codeA = code1 + "-" + code2 + "-" + code3;

let codeB = `${code1}-${code2}-${code3}`;

console.log(message, codeA, codeB);
