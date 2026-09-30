class User {
    constructor(private id: number, private name: string,private email: string) {}
    public getId(): number {
        return this.id;
    }
    public getName(): string {
        return this.name;
    }
    public getEmail(): string {
        return this.email;
    }
}