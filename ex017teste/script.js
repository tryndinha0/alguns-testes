function tabuada() {
    var num = document.querySelector('input#txtn')
    var tab = document.querySelector('select#seltab')

    if (num.value.length == 0) {
        alert('Insira um valor para prosseguir')
    } else {
        tab.innerHTML = ''
        var n = Number(num.value)
        for (var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}




