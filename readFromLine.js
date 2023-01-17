const a = require("readline")

const r1 = a.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.question("what is your name? ",(name) => {
    console.log("hello " + name);
    r1.close();
})