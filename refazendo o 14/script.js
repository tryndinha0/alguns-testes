function carregar(){
    var data  = new Date()
    var hora = data.getHours()
    var msg = document.querySelector('p#msg')
    var img = document.querySelector('img#img')
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 6 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    }
    else if(hora <18){
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    }
    else if(hora <= 24){
        img.src = 'noite.png'
        document.body.style.background = '#0b0b5cc5'
    }else{
        msg.innerHTML = `${hora} é um horário inválido`
        img.src = '#'
        img.alt = ''
        document.body.style.background = 'red'
    }
}