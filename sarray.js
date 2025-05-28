let listadeAtividades = []
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