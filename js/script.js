const botaoSubmit = document.getElementById("cadastroId")

function validarFormulario() {
    const tudo = document.querySelectorAll("input[type='text'], input[type='email']")
    console.log(tudo)
    console.log(tudo.length)
    let problema = ''
    for(let x = 0; x < tudo.length ; x++ ){
        if(tudo[x].value == ''){
            problema = problema + 'O Campo : ' + tudo[x].name + ' não foi preenchido!\n'
        }
    }
    if(problema != ''){
        alert(problema)
        return
    }
    if (problema == ''){
        alert('Obrigado ' + tudo[0].value + "!\n Seu cadastro foi realizado com sucesso!")
        document.querySelector(".campos").submit()
    }
}

botaoSubmit.addEventListener("click", validarFormulario)