export class Customer {
    public name: string
    public age: number
    public subscriptions = [] 

    constructor(name: string, age: number, subscriptions: any) {
        this.name = name
        this.age = age
        this.subscriptions = subscriptions
    }
}