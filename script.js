function calcular(){
    let hourvalue = Number(valorHora.value)
    let workedHour = Number(horasTrabalhadas.value)
    let total = hourvalue * workedHour

    if(workedHour <= 0){
        resultado1.innerHTML = `Horas Invalidas - ERRO -`
    } 
    else if(total > 0 && total < 2000){
        resultado1.innerHTML = `O valor ganho foi de R$ ${total.toFixed(2)}`
    }
    else if(total >= 2000){
        resultado1.innerHTML = `O valor ganho foi de R$ ${total.toFixed(2)}, parabéns!!!`
    }

}

function login(){
    let emailValido = "teste@gmail.com"
    let senhaValida = 1234

    if(email.value == emailValido && senha.value == senhaValida){
        resultado2.innerHTML = `Login Realizado com Sucesso`
    }else {
        resultado2.innerHTML = `Login ou senha invalidos`
    }
}

function classificarTarefa(){
    
}