"use strict";

//Classes=========================================================

/* var i = 1

class List {
    constructor() {
        this.data = []
    }
    add(data) {
        this.data.push(data)
        console.log(this.data)
        i++
    }
}
class TodoList extends List {
    constructor() {
        super()
        this.usuario = "Daniel S."
    }
    printUser() {
        console.log(this.usuario)
    }
}

const MinhaLista = new TodoList()

document.getElementById("novotodo").onclick = () => {
    MinhaLista.add(`Todo ${i}`)
} */
//Static Methods==================================================

/* class Math {
    static sum(a, b) {
        return a + b
    }
}
console.log(Math.sum(1, 2))*/
//const & let=====================================================

/* const usuario = {nome: "Daniel"} //constantes não podem ser reescritas, mas são mutáveis
usuario.nome = "Cleiton"
console.log(usuario.nome)

let y = 4 //lets não existem fora do escopo onde foram declaradas
function teste(x) {
    let y = 2
    if (x > 5) {
        console.log(x, y)
    }
}
console.log(y)
teste(10) */
//Arrays==========================================================

/* const arr = [1, 2, 3, 4, 5, 6]

const newArr = arr.map((element, index) => { //iterates through array
    return element + index
})
const arrSum = arr.reduce((total, next) => { //sums array
    return total + next
})
const filter = arr.filter((element) => { //filters array under condition
    return element % 2 === 0
})
const filterSum = filter.reduce((total, next) => {
    return total + next
})
const arrFind = arr.find((element) => { //looks for parameter in array
    return element === 7
})

console.log(newArr)
console.log(arrSum)
console.log(filter)
console.log(filterSum)
console.log(arrFind) */
//Default Parameters==============================================
var soma = function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  return a + b;
};

console.log(soma(5));
console.log(soma());
