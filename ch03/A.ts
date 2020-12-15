class A {
    value: number = 1
    method: () => void = function(): void {
        console.log(`value: ${this.value}`)
    }
}
let a = new A
a.method()

class B {
    constructor(public value: number = 1) {}
    method(): void {
        console.log(`value: ${this.value}`)
    }
}
let b = new B(2)
b.method()