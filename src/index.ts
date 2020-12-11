class User {

    constructor(
        private id: number,
        private email: string, 
        private password: string, 
        private username?: string
    ) {}

    printUser() {
        return `
        id: ${this.id}
        email: ${this.email} 
        username: ${this.username ? this.username : null} 
        `
    }

    strongPassword() {
        // Senha forte com letras maiusculas e minusculas numeros e caracteres especiais
        let regex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}$/
        return regex.test(this.password)
    }
}

const user: User = new User(1, 'fulano@email.com', '12Apt@')
console.log(user.printUser())
console.log(`${user.strongPassword() ? '\tsua senha é forte' : '\tsua senha não é forte'}`)
