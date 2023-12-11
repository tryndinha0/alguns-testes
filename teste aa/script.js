function somar(){
    var valor1 = document.querySelector('input#num1')
    var valor2 = document.querySelector('input#num2')
    var res = document.querySelector('div#res')
    
    if(valor1.value.length == 0 || valor2.value.length == 0){
        res.innerHTML = 'Coloque dois números para que a soma seja feita!'
    }else{
        var n1 = Number(valor1.value)
        var n2 = Number(valor2.value)
        var s = n1 + n2
        res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${s}`
    }
}