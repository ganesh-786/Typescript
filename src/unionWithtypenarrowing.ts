function Menu(order: string | number){
    if (typeof order === "string"){
        return `Order is ${order}`
    }
    return `Order is ${order}`
}

console.log(Menu("Ram"));
console.log(Menu(100));