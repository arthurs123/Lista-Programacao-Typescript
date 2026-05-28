class Funcionario{
    nome:string
    cargo:string
    salario:number

    constructor(nameFunc:string, funcPosition:string, funcWage:number){
        this.nome=nameFunc
        this.salario=funcWage
        this.cargo=funcPosition
    }
    exibirResumo():void{
        console.log(`Funcionario: ${this.nome} | Cargo:${this.cargo} | Salario: ${this.salario}R$`)
    } 
}
let op:string= ""
while(op!="N"){
    let nameFunc:string, funcPosition:string, funcWage:number

    nameFunc=String(prompt("Informe o nome do funcionario: "))
    funcPosition=String(prompt("Informe o cargo: "))
    funcWage=Number(prompt("Informe o salario: "))


    let novoFunc= new Funcionario(nameFunc,funcPosition,funcWage)

    novoFunc.exibirResumo()

    op=String(prompt("Deseja continuar?: S/N")).toUpperCase()

}
