function tabuada(){
    var num = document.querySelector('input#num')
    var tab = document.querySelector('select#seltab')

    if(num.value.length == 0){
        alert('Insira um número para começar')
    }else{
        var  n = Number(num.value)
        tab.innerHTML = ''
        for (var c = 1;c<=10;c++){
            var item = document.createElement('option')
            item.innerText = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}