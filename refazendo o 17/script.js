function tabuada() {
    tab = document.querySelector('p#num')
    tab.innerHTML = ''
    num = Number(document.querySelector('input#num').value)
    if (num == '' || num == 0) {
        alert('coloque numero valido porra')
    }else{
        for (a = 1; a <= 10; a++) {
            tab.innerHTML += `${num}x${a} = ${num * a}<br>`

        }
    }
}