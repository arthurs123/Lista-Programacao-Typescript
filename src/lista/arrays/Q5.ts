export function questao5array():void{
    // 5. Organizador de Tarefas Diárias
// Você quer organizar suas tarefas de casa e da escola para não esquecer nada. Crie uma função
// chamada gerenciar_tarefas() que não receba argumentos. A função deve:
// a) Permitir que o usuário adicione tarefas a um vetor.
// b) Permitir que o usuário marque tarefas como concluídas (removendo-as da lista, por
// exemplo).
// c) Permitir que o usuário exiba todas as tarefas pendentes.
// Utilize um menu interativo com opções (adicionar, concluir, exibir, sair) e um laço while para
// manter o programa rodando até o usuário escolher sair.


function gerenciar_tarefas(){
    let vetor=[]
    let op:number
    let escolha:string
    let remove:string
    let itemRemove

    op=Number(prompt("Gerenciador de tarefas: 1-adicionar, 2-marcar como concluídas, 3-mostrar tarefas, 4-sair"))

    while(op!=4){
        if (op==1){
            escolha=String(prompt("Escreva a tarefa que deseja adicionar: "))
            vetor.push(escolha)
        }
        else if(op==2){



            
            remove=String(prompt("Escreva o item que deseja marcar como concluido: "))
            itemRemove=vetor.indexOf(remove)
            if(itemRemove!=-1){
                vetor.splice(itemRemove, 1)
            }
            else{
                alert("Item não encontrado")
            }
        }
        else if(op==3){
            alert(`Tarefas: ${vetor}`)
        }
        op=Number(prompt("Gerenciador de tarefas: 1-adicionar, 2-marcar como concluídas, 3-mostrar tarefas, 4-sair"))
    }
}
gerenciar_tarefas()
}