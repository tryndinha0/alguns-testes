function carregar(){
    var data  = new Date()
    var hora = data.getHours()
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#img')
    msg.innerHTML = `Agora são ${hora} horas`

   if (hora >= 0 && hora < 12 ){
        //bom dia
        img.src = 'manhã.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora < 18){
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    } else if (hora < 24 ) {
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = '#0b0b5cc5'
    } else{
        //horario invalido
        img.src = '#' 
        img.alt = ''
        msg.innerHTML = `${hora} é um horário inválido`
        document.body.style.background = 'red'
    }
}