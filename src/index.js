import Example from "./sripts/example";

document.addEventListener('DOMContentLoaded', () => {
    console.log('hello world')

    const main = document.getElementById("main");
    new Example(main);
})
