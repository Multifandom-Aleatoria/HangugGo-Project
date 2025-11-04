function AgeConfirm(){

    let age = window.prompt('Tem 12 anos? O app é recomendado apenas para maiores de 12 anos');

    if (age >= 13) {
    window.alert(`Pode prosseguir!`);
}

    if (age = 100){
        window.alert(`Espera... essa não é sua idade! Muito provavelmente...`)
    }    
    else{
    window.alert(`Você não tem idade pra poder fazer o curso, se deseja prosseguir, é preciso verificação dos pais para fazer o curso`);
    }
}