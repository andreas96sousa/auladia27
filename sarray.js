let listadeAtividades = []
let notas = []
let list = []
function acrescentar(){
    switch(Number(prioridade.value)){
        case 1:
            listadeAtividades.push(`1 - Urgente: ${atividade.value}`)
            result1.innerHTML = `Atividade Inserida com sucesso na Tag 1 - Urgente`
            break
        case 2:
            listadeAtividades.push(`2 - Importante: ${atividade.value}`)
            result1.innerHTML = `Atividade Inserida com sucesso na Tag 2 - Importante`
            break
        case 3:
            listadeAtividades.push(`3 - Opcional: ${atividade.value}`)
            result1.innerHTML = `Atividade Inserida com sucesso na Tag 3 - Opcional`
            break
        default:
            result1.innerHTML = `Prioridade: Inválida`
}
}
function mostrarLista(){

    result1.innerHTML = ""
    listadeAtividades.sort()
    listadeAtividades.forEach(item => result1.innerHTML += `${item} <br>`)
}
function media(){
    notas.push(Number(nota.value))
    let soma = notas.reduce((acc, curr) => acc + curr);
    result2.innerHTML = `${soma/notas.length} <br>`
    soma/notas.length >= 7 ? result2.innerHTML += `Aprovado` : result2.innerHTML += `Reprovado`
}

function listar(){
    listaseparada = lista.value
    list += listaseparada.split(',')
    list.sort
    result3.innerHTML +=  `${list}`
    for(let i = 0; i < list.length; i++){
    }
}