
function aleatorio(){
    var res = document.querySelector('p#res')
    var numero = Math.round(Math.random(numero)*10)
    res.innerHTML = numero
    if(numero % 2 == 0 ){
        document.body.style.backgroundColor = 'red'
    }else{
        document.body.style.backgroundColor = 'white'
    }
   
}

